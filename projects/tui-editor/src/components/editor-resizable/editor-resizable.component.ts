import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
} from '@angular/core';
import {tuiIsNumber, tuiPx, TuiResizerModule} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    selector: 'tui-editor-resizable',
    imports: [TuiResizerModule, NgIf],
    templateUrl: './editor-resizable.component.html',
    styleUrls: ['./editor-resizable.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEditorResizableComponent {
    @Input()
    autoHeight = false;

    @Input()
    width: number | string | null = null;

    @Input()
    height: number | string | null = null;

    @Output()
    readonly sizeChange = new EventEmitter<readonly [width: number, height: number]>();

    @HostBinding('style.width')
    get hostWidth(): number | string | null {
        return tuiIsNumber(this.width) ? tuiPx(this.width) : this.width;
    }

    @HostBinding('style.height')
    get hostHeight(): number | string | null {
        if (this.autoHeight) {
            return null;
        }

        return tuiIsNumber(this.height) ? tuiPx(this.height) : this.height;
    }
}
