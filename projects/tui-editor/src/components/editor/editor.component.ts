import {AsyncPipe, DOCUMENT, NgIf, NgTemplateOutlet} from '@angular/common';
import type {OnDestroy} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    inject,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import type {TuiBooleanHandler, TuiFocusableElementAccessor} from '@taiga-ui/cdk';
import {
    AbstractTuiControl,
    TUI_FALSE_HANDLER,
    TUI_TRUE_HANDLER,
    TuiActiveZoneDirective,
    tuiAsFocusableItemAccessor,
    tuiAutoFocusOptionsProvider,
} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_DEFAULT_DURATION,
    TuiDropdownDirective,
    TuiDropdownOptionsDirective,
    TuiScrollbarComponent,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {delay, takeUntil} from 'rxjs';

import type {AbstractTuiEditor} from '../../abstract/editor-adapter.abstract';
import {TUI_EDITOR_DEFAULT_TOOLS} from '../../constants/default-editor-tools';
import {TuiTiptapEditorDirective} from '../../directives/tiptap-editor/tiptap-editor.directive';
import {TuiTiptapEditorService} from '../../directives/tiptap-editor/tiptap-editor.service';
import type {TuiEditorTool} from '../../enums/editor-tool';
import type {TuiEditorAttachedFile} from '../../interfaces/attached';
import {TUI_EDITOR_OPTIONS} from '../../tokens/editor-options';
import {TUI_EDITOR_CONTENT_PROCESSOR} from '../../tokens/editor-processor';
import {TIPTAP_EDITOR} from '../../tokens/tiptap-editor';
import {tuiIsSafeLinkRange} from '../../utils/safe-link-range';
import {TuiEditLinkComponent} from '../edit-link/edit-link.component';
import {TuiEditorSocketComponent} from '../editor-socket/editor-socket.component';
import {TuiToolbarComponent} from '../toolbar/toolbar.component';
import {TuiDropdownToolbarDirective} from './dropdown/dropdown-toolbar.directive';
import {TUI_EDITOR_PROVIDERS} from './editor.providers';
import {TuiEditorPortalDirective} from './portal/editor-portal.directive';
import {TuiEditorPortalHostComponent} from './portal/editor-portal-host.component';

@Component({
    standalone: true,
    selector: 'tui-editor',
    imports: [
        AsyncPipe,
        NgIf,
        TuiWrapperModule,
        TuiActiveZoneDirective,
        TuiScrollbarComponent,
        TuiDropdownOptionsDirective,
        TuiDropdownDirective,
        TuiEditLinkComponent,
        TuiEditorPortalHostComponent,
        TuiEditorPortalDirective,
        TuiTiptapEditorDirective,
        TuiEditorSocketComponent,
        TuiToolbarComponent,
        NgTemplateOutlet,
        TuiDropdownToolbarDirective,
    ],
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiEditorComponent),
        tuiAutoFocusOptionsProvider({delay: TUI_ANIMATIONS_DEFAULT_DURATION}),
        TUI_EDITOR_PROVIDERS,
    ],
})
export class TuiEditorComponent
    extends AbstractTuiControl<string>
    implements OnDestroy, TuiFocusableElementAccessor
{
    @ViewChild(TuiTiptapEditorDirective, {read: ElementRef})
    private readonly el?: ElementRef<HTMLElement>;

    private readonly contentProcessor = inject(TUI_EDITOR_CONTENT_PROCESSOR);
    private readonly doc = inject(DOCUMENT);

    @Input()
    public exampleText = '';

    @Input()
    public floatingToolbar = false;

    @Input()
    public tools: readonly TuiEditorTool[] = TUI_EDITOR_DEFAULT_TOOLS;

    @Output()
    public readonly fileAttached = new EventEmitter<Array<TuiEditorAttachedFile<any>>>();

    public focused = false;

    @ViewChild(TuiToolbarComponent)
    protected readonly toolbar?: TuiToolbarComponent;

    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly editorLoaded$ = inject(TIPTAP_EDITOR);

    protected sub = this.editorLoaded$
        .pipe(delay(0), takeUntil(this.destroy$))
        .subscribe(() => this.patchContentEditableElement());

    protected readonly editorService = inject(TuiTiptapEditorService);

    public get editor(): AbstractTuiEditor | null {
        return this.editorService.getOriginTiptapEditor() ? this.editorService : null;
    }

    public get nativeFocusableElement(): HTMLDivElement | null {
        return this.computedDisabled
            ? null
            : this.el?.nativeElement?.querySelector('[contenteditable].ProseMirror') ||
                  null;
    }

    public override writeValue(value: string | null): void {
        if (value === this.value) {
            return;
        }

        const processed = this.contentProcessor(value || '');

        super.writeValue(processed);

        if (processed !== value) {
            this.control?.setValue(processed, {
                onlySelf: false,
                emitEvent: false,
                emitModelToViewChange: false,
                emitViewToModelChange: false,
            });
        }

        if (!this.focused) {
            this.doc.getSelection()?.removeAllRanges();
        }
    }

    public override ngOnDestroy(): void {
        this.editor?.destroy();
    }

    protected get dropdownSelectionHandler(): TuiBooleanHandler<Range> {
        if (this.floatingToolbar) {
            return TUI_TRUE_HANDLER;
        }

        return this.focused ? this.isSelectionLink : TUI_FALSE_HANDLER;
    }

    protected get placeholderRaised(): boolean {
        return (this.computedFocused && !this.readOnly) || this.hasValue;
    }

    protected get hasExampleText(): boolean {
        return (
            !!this.exampleText && this.computedFocused && !this.hasValue && !this.readOnly
        );
    }

    protected get isLinkSelected(): boolean {
        const node = this.doc.getSelection()?.focusNode?.parentNode;
        const element = node?.nodeName.toLowerCase();

        return element === 'a' || !!node?.parentElement?.closest('tui-edit-link');
    }

    protected onActiveZone(focused: boolean): void {
        this.focused = focused;
        this.updateFocused(focused);
        this.control?.updateValueAndValidity();
    }

    protected onModelChange(value: string): void {
        this.value = value;
    }

    protected addAnchor(anchor: string): void {
        this.editor?.setAnchor(anchor);
    }

    protected removeAnchor(): void {
        this.editor?.removeAnchor();
    }

    protected addLink(link: string): void {
        this.editor?.selectClosest();
        this.editor?.setLink(link);
    }

    protected removeLink(): void {
        this.editor?.unsetLink();
    }

    protected focus(event: MouseEvent): void {
        if (this.nativeFocusableElement?.contains(event.target as Node | null)) {
            return;
        }

        event.preventDefault();
        this.nativeFocusableElement?.focus();
    }

    protected getFallbackValue(): string {
        return '';
    }

    private get focusNode(): Node | null {
        return this.doc.getSelection()?.focusNode ?? null;
    }

    private get hasValue(): boolean {
        return !!this.value;
    }

    private get currentFocusedNodeIsImageAnchor(): boolean {
        return (
            this.focusNode?.nodeName === 'A' &&
            ['IMG', 'TUI-IMAGE-EDITOR'].includes(this.focusNode?.childNodes[0]?.nodeName)
        );
    }

    private readonly isSelectionLink = (range: Range): boolean =>
        this.currentFocusedNodeIsTextAnchor(range) ||
        this.currentFocusedNodeIsImageAnchor;

    /**
     * @description:
     * The commonAncestorContainer not always relevant node element in Range,
     * so the focusNode is used for the correct behaviour from the selection,
     * which is the actual element at the moment
     */
    private currentFocusedNodeIsTextAnchor(range: Range): boolean {
        return (
            !!range.startContainer.parentElement
                ?.closest('a')
                ?.contains(this.focusNode) && tuiIsSafeLinkRange(range)
        );
    }

    private patchContentEditableElement(): void {
        this.nativeFocusableElement?.setAttribute('translate', this.options.translate);
        this.nativeFocusableElement?.setAttribute(
            'spellcheck',
            String(this.options.spellcheck),
        );
    }
}
