import {NgIf} from '@angular/common';
import type {ElementRef} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import {tuiIsNumber, tuiPx, TuiResizable, TuiResizer} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    selector: 'tui-editor-resizable',
    imports: [NgIf, TuiResizable, TuiResizer],
    templateUrl: './editor-resizable.component.html',
    styleUrls: ['./editor-resizable.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEditorResizable {
    @ViewChild('container', {static: true})
    public container?: ElementRef<HTMLDivElement>;

    @Input()
    public autoHeight = false;

    @Input()
    public width: number | string | null = null;

    @Input()
    public height: number | string | null = null;

    @Output()
    public readonly sizeChange = new EventEmitter<
        readonly [width: number, height: number]
    >();

    @HostBinding('style.width')
    protected get hostWidth(): number | string | null {
        return tuiIsNumber(this.width) ? tuiPx(this.width) : this.width;
    }

    @HostBinding('style.height')
    protected get hostHeight(): number | string | null {
        if (this.autoHeight) {
            return null;
        }

        return tuiIsNumber(this.height) ? tuiPx(this.height) : this.height;
    }
}
