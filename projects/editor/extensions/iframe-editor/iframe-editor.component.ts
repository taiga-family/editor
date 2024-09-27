import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    inject,
} from '@angular/core';
import type {SafeResourceUrl} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {tuiPure} from '@taiga-ui/cdk';
import type {TuiEditableIframe} from '@taiga-ui/editor/common';
import {TUI_EDITOR_RESIZE_EVENT} from '@taiga-ui/editor/common';
import {
    AbstractTuiEditorResizable,
    TuiEditorResizable,
} from '@taiga-ui/editor/components/editor-resizable';

import {TUI_IFRAME_EDITOR_OPTIONS} from './iframe-editor.options';

@Component({
    standalone: true,
    selector: 'tui-iframe-editor',
    imports: [TuiEditorResizable],
    templateUrl: './iframe-editor.component.html',
    styleUrls: ['./iframe-editor.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiIframeEditor extends AbstractTuiEditorResizable<TuiEditableIframe> {
    private readonly sanitizer = inject(DomSanitizer);
    private readonly el: ElementRef<HTMLDivElement> = inject(ElementRef);
    protected readonly options = inject(TUI_IFRAME_EDITOR_OPTIONS);
    protected readonly changeDetector = inject(ChangeDetectorRef);

    public updateSize([width, height]: readonly [width: number, height: number]): void {
        this.currentWidth = Math.max(
            this.options.minWidth,
            Math.min(this.options.maxWidth, width),
        );

        this.currentHeight = Math.max(
            this.options.minHeight,
            Math.min(this.options.maxHeight, height),
        );

        this.attrs.width = this.currentWidth;
        this.attrs.height = this.currentHeight;

        this.el.nativeElement.dispatchEvent(
            new CustomEvent(TUI_EDITOR_RESIZE_EVENT, {bubbles: true}),
        );
    }

    @tuiPure
    protected get src(): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.attrs.src ?? '');
    }
}
