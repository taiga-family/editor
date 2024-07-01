import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {WINDOW} from '@ng-web-apis/common';
import {TuiDestroyService, tuiPure} from '@taiga-ui/cdk';
import {AbstractTuiEditorResizable} from '@tinkoff/tui-editor/components/editor-resizable';
import {TUI_EDITOR_RESIZE_EVENT} from '@tinkoff/tui-editor/constants';

import {
    TUI_EDITOR_MAX_IMAGE_WIDTH,
    TUI_EDITOR_MIN_IMAGE_WIDTH,
    TUI_IMAGE_EDITOR_OPTIONS,
    TuiEditableImage,
    TuiImageEditorOptions,
} from './image-editor.options';

@Component({
    selector: 'tui-image-editor',
    templateUrl: './image-editor.component.html',
    styleUrls: ['./image-editor.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiImageEditorComponent extends AbstractTuiEditorResizable<TuiEditableImage> {
    @HostBinding('attr.contenteditable')
    contenteditable = true;

    focused = false;

    @HostBinding('attr.data-drag-handle')
    get dragHandle(): '' | null {
        return this.attrs.draggable ?? null;
    }

    override get height(): number | string | null {
        return null;
    }

    get alt(): string {
        return this.attrs.alt || '';
    }

    get title(): string {
        return this.attrs.title || '';
    }

    get src(): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.attrs.src);
    }

    constructor(
        @Inject(TUI_EDITOR_MIN_IMAGE_WIDTH) readonly legacyMinWidth: number | null,
        @Inject(TUI_EDITOR_MAX_IMAGE_WIDTH) readonly legacyMaxWidth: number | null,
        @Inject(TUI_IMAGE_EDITOR_OPTIONS) readonly options: TuiImageEditorOptions,
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLDivElement>,
        @Inject(WINDOW) private readonly win: Window,
    ) {
        super();
    }

    @tuiPure
    getSrc(src?: string | null): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(src ?? '');
    }

    @HostListener('document:click.silent', ['$event.target'])
    currentTargetIsFocused(node: Node): void {
        this.focused = this.el.nativeElement.contains(node);

        if (this.focused) {
            this.selectFakeText();
        }
    }

    get minWidth(): number {
        return (this.legacyMinWidth ?? this.options.minWidth) || 0;
    }

    get maxWidth(): number {
        return (this.legacyMaxWidth ?? this.options.maxWidth) || 0;
    }

    updateSize([width]: readonly [width: number, height: number]): void {
        this.currentWidth = Math.max(this.minWidth, Math.min(this.maxWidth, width));
        this.attrs.width = this.currentWidth;

        this.el.nativeElement.dispatchEvent(
            new CustomEvent(TUI_EDITOR_RESIZE_EVENT, {bubbles: true}),
        );
    }

    private selectFakeText(): void {
        const range = this.doc.createRange();

        this.el.nativeElement.querySelector('p')?.focus();

        range.selectNode(this.el.nativeElement);
        this.win.getSelection()?.removeAllRanges();
        this.win.getSelection()?.addRange(range);
    }
}
