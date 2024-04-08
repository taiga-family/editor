import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import type {SafeResourceUrl} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {TuiDestroyService} from '@taiga-ui/cdk';

import {AbstractTuiEditorResizable} from '../../components/editor-resizable/editor-resizable.abstract';
import {TuiEditorResizableComponent} from '../../components/editor-resizable/editor-resizable.component';
import type {TuiEditableIframe} from './iframe-editor.options';
import {TUI_IFRAME_EDITOR_OPTIONS} from './iframe-editor.options';

@Component({
    standalone: true,
    selector: 'tui-iframe-editor',
    imports: [TuiEditorResizableComponent],
    templateUrl: './iframe-editor.component.html',
    styleUrls: ['./iframe-editor.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiIframeEditorComponent extends AbstractTuiEditorResizable<TuiEditableIframe> {
    private readonly sanitizer = inject(DomSanitizer);
    protected readonly options = inject(TUI_IFRAME_EDITOR_OPTIONS);

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

        // force update
        this.editor.commands.setContent(this.editor.getJSON());
    }

    protected get src(): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.attrs.src ?? '');
    }
}
