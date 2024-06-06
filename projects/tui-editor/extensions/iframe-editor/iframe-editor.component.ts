import {ChangeDetectionStrategy, Component, ElementRef, Inject} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {AbstractTuiEditorResizable} from '@tinkoff/tui-editor/components/editor-resizable';
import {TUI_EDITOR_RESIZE_EVENT} from '@tinkoff/tui-editor/constants';

import {
    TUI_IFRAME_EDITOR_OPTIONS,
    TuiEditableIframe,
    TuiEditableIframeOptions,
} from './iframe-editor.options';

@Component({
    selector: 'tui-iframe-editor',
    templateUrl: './iframe-editor.component.html',
    styleUrls: ['./iframe-editor.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiIframeEditorComponent extends AbstractTuiEditorResizable<TuiEditableIframe> {
    get src(): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.attrs.src ?? '');
    }

    constructor(
        @Inject(TUI_IFRAME_EDITOR_OPTIONS) readonly options: TuiEditableIframeOptions,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLDivElement>,
    ) {
        super();
    }

    updateSize([width, height]: readonly [width: number, height: number]): void {
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
}
