import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WA_WINDOW} from '@ng-web-apis/common';
import {
    TUI_IS_IOS,
    TuiAutoFocus,
    tuiAutoFocusOptionsProvider,
    tuiIsElement,
} from '@taiga-ui/cdk';
import {TuiButton, TuiLink, TuiScrollbar} from '@taiga-ui/core';
import type {
    AbstractTuiEditor,
    TuiEditorLinkPrefix,
    TuiEditorLinkProtocol,
} from '@taiga-ui/editor/common';
import {
    TUI_EDITOR_LINK_HASH_PREFIX,
    TUI_EDITOR_LINK_HTTPS_PREFIX,
    TUI_EDITOR_LINK_TEXTS,
    TUI_EDITOR_OPTIONS,
} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {TuiInputInline} from '@taiga-ui/kit';

import {TuiFilterAnchorsPipe} from './pipes/filter-anchors.pipe';
import {TuiShortUrlPipe} from './pipes/short-url.pipe';
import {tuiEditLinkParseUrl} from './utils/edit-link-parse-url';

@Component({
    standalone: true,
    selector: 'tui-edit-link',
    imports: [
        AsyncPipe,
        FormsModule,
        NgForOf,
        NgIf,
        TuiAutoFocus,
        TuiButton,
        TuiFilterAnchorsPipe,
        TuiInputInline,
        TuiLink,
        TuiScrollbar,
        TuiShortUrlPipe,
    ],
    templateUrl: './edit-link.template.html',
    styleUrls: ['./edit-link.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        /**
         * Safari has a different behavior for autofocus,
         * which causes focus to be lost at the moment of delay
         * https://github.com/taiga-family/editor/issues/1717
         */
        {
            provide: TUI_IS_IOS,
            useValue: true,
        },
        tuiAutoFocusOptionsProvider({
            delay: 0,
            preventScroll: true,
        }),
    ],
    host: {
        '(document:selectionchange)': 'onSelectionChange()',
        '(mousedown.capture)': 'onMouseDown($event)',
    },
})
export class TuiEditLink {
    private readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    private readonly doc: Document | null = inject(WA_WINDOW)?.document ?? null;
    private isOnlyAnchorMode: boolean = this.detectAnchorMode();
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected url: string = this.getHrefOrAnchorId();
    protected edit = !this.url;
    protected prefix: TuiEditorLinkPrefix = this.makeDefaultPrefix();
    protected anchorIds = this.getAllAnchorsIds();
    protected readonly texts$ = inject(TUI_EDITOR_LINK_TEXTS);

    @Input('editor')
    public inputEditor: AbstractTuiEditor | null = null;

    @Output()
    public readonly addLink = new EventEmitter<string>();

    @Output()
    public readonly removeLink = new EventEmitter<void>();

    @Input()
    public set anchorMode(mode: boolean) {
        this.isOnlyAnchorMode = mode;
        this.prefix = mode ? TUI_EDITOR_LINK_HASH_PREFIX : this.makeDefaultPrefix();
    }

    public get anchorMode(): boolean {
        return this.isOnlyAnchorMode;
    }

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.inputEditor;
    }

    protected get defaultProtocol(): TuiEditorLinkProtocol {
        return this.options.linkOptions?.protocol ?? TUI_EDITOR_LINK_HTTPS_PREFIX;
    }

    protected get prefixIsHashMode(): boolean {
        return this.prefix === TUI_EDITOR_LINK_HASH_PREFIX;
    }

    protected get hasUrl(): boolean {
        return !!this.url;
    }

    protected get href(): string {
        return `${this.prefix}${this.url}`;
    }

    protected get showAnchorsList(): boolean {
        return !this.anchorMode && this.edit && this.anchorIds.length > 0;
    }

    protected onSelectionChange(): void {
        if (this.isViewMode) {
            this.url = this.getHrefOrAnchorId();
            this.anchorMode = this.detectAnchorMode();
        }
    }

    protected onMouseDown(event: MouseEvent): void {
        if (tuiIsElement(event.target) && !event.target.matches('a, button, input')) {
            event.preventDefault();
        }
    }

    protected setAnchor(anchor: string): void {
        this.url = anchor;
        this.changePrefix(true);
        this.addLink.emit(this.href);
    }

    protected changePrefix(useHash: boolean): void {
        this.prefix = useHash ? TUI_EDITOR_LINK_HASH_PREFIX : this.defaultProtocol;
    }

    protected onSave(): void {
        if (this.url) {
            this.addLink.emit(this.href);
        } else {
            this.removeLink.emit();
        }
    }

    protected onBackspace(): void {
        if (!this.url) {
            this.prefix = this.isOnlyAnchorMode
                ? TUI_EDITOR_LINK_HASH_PREFIX
                : this.defaultProtocol;
        }
    }

    protected onEdit(): void {
        this.edit = true;
    }

    protected onRemove(): void {
        this.removeLink.emit();
    }

    protected onChange(url: string): void {
        this.url = this.removePrefix(url);
    }

    protected onBlur(url: string): void {
        const range = this.editor?.getSelectionSnapshot();

        if (range && !url && !this.url) {
            this.editor?.setTextSelection({from: range.anchor, to: range.head});

            if (this.anchorMode) {
                this.editor?.removeAnchor();
            } else {
                this.editor?.toggleLink('');
            }
        }
    }

    protected onClear(): void {
        this.url = '';
    }

    private get isViewMode(): boolean {
        return !this.edit;
    }

    private makeDefaultPrefix(): TuiEditorLinkPrefix {
        const a = this.getAnchorElement();
        const defaultPrefix =
            (tuiEditLinkParseUrl(a?.getAttribute('href') ?? '')
                .prefix as TuiEditorLinkPrefix) || this.defaultProtocol;

        if (a) {
            if (this.isOnlyAnchorMode) {
                return TUI_EDITOR_LINK_HASH_PREFIX;
            }

            return (!a.getAttribute('href') && a.getAttribute('id')) ||
                a.getAttribute('href')?.startsWith(TUI_EDITOR_LINK_HASH_PREFIX)
                ? TUI_EDITOR_LINK_HASH_PREFIX
                : defaultPrefix;
        }

        return defaultPrefix;
    }

    private detectAnchorMode(): boolean {
        const a = this.getAnchorElement();

        return (
            !a?.href &&
            (!!a?.getAttribute('id') || a?.getAttribute('data-type') === 'jump-anchor')
        );
    }

    private getFocusedParentElement(): HTMLElement | null {
        return this.doc?.getSelection?.()?.focusNode?.parentElement || null;
    }

    private getAnchorElement(): HTMLAnchorElement | null {
        const focusable = this.getFocusedParentElement();

        return (
            focusable?.closest('a') ??
            focusable?.querySelector('img')?.closest('a') ??
            null
        );
    }

    private getHrefOrAnchorId(): string {
        const a = this.getAnchorElement();

        return a
            ? this.removePrefix(a.getAttribute('href') ?? a.getAttribute('id') ?? '')
            : this.url;
    }

    private removePrefix(url: string): string {
        const fullPath =
            url.startsWith(TUI_EDITOR_LINK_HASH_PREFIX) ||
            this.prefix === TUI_EDITOR_LINK_HASH_PREFIX ||
            url.startsWith('/') ||
            url.startsWith('./') ||
            url.startsWith('http') ||
            url.startsWith('://')
                ? url
                : `${this.prefix ?? ''}${url}`;

        const {prefix, path} = tuiEditLinkParseUrl(fullPath);
        const expectAnchorMode =
            this.isOnlyAnchorMode ||
            prefix === TUI_EDITOR_LINK_HASH_PREFIX ||
            (prefix === '' && this.prefix === TUI_EDITOR_LINK_HASH_PREFIX);

        if (expectAnchorMode) {
            this.prefix = TUI_EDITOR_LINK_HASH_PREFIX;
        } else if (prefix === '') {
            this.prefix = this.defaultProtocol;
        } else {
            this.prefix = prefix as TuiEditorLinkPrefix;
        }

        return path;
    }

    private getAllAnchorsIds(): string[] {
        const nodes: Element[] = Array.from(
            this.editor
                ?.getOriginTiptapEditor()
                ?.view.dom.querySelectorAll('[data-type="jump-anchor"]') ?? [],
        );

        return Array.from(nodes)
            .map((node) => node.getAttribute('id') ?? '')
            .filter(Boolean);
    }
}
