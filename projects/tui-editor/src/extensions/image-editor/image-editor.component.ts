import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    inject,
} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {WINDOW} from '@ng-web-apis/common';
import {TuiDestroyService} from '@taiga-ui/cdk';

import {AbstractTuiEditorResizable} from '../../components/editor-resizable/editor-resizable.abstract';
import {TuiEditorResizableComponent} from '../../components/editor-resizable/editor-resizable.component';
import {TUI_IMAGE_EDITOR_OPTIONS, TuiEditableImage} from './image-editor.options';

@Component({
    standalone: true,
    selector: 'tui-image-editor',
    imports: [TuiEditorResizableComponent],
    templateUrl: './image-editor.component.html',
    styleUrls: ['./image-editor.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiImageEditorComponent extends AbstractTuiEditorResizable<TuiEditableImage> {
    private readonly sanitizer = inject(DomSanitizer);
    private readonly el = inject(ElementRef);
    private readonly win = inject(WINDOW);

    @HostBinding('attr.contenteditable')
    contenteditable = true;

    focused = false;

    readonly options = inject(TUI_IMAGE_EDITOR_OPTIONS);

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

    @HostListener('document:click.silent', ['$event.target'])
    currentTargetIsFocused(node: Node): void {
        this.focused = this.el.nativeElement.contains(node);

        if (this.focused) {
            this.selectFakeText();
        }
    }

    updateSize([width]: readonly [width: number, height: number]): void {
        this.currentWidth = Math.max(
            this.options.minWidth,
            Math.min(this.options.maxWidth, width),
        );

        this.attrs.width = this.currentWidth;

        // force update
        this.editor.commands.setContent(this.editor.getJSON());
    }

    private selectFakeText(): void {
        const range = this.win.document.createRange();

        this.el.nativeElement.querySelector('p')?.focus();

        range.selectNode(this.el.nativeElement);
        this.win.getSelection()?.removeAllRanges();
        this.win.getSelection()?.addRange(range);
    }
}
