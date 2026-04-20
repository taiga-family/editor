import {
    ChangeDetectionStrategy,
    Component,
    type ElementRef,
    input,
    output,
    viewChild,
} from '@angular/core';
import {tuiIsNumber, tuiPx, TuiResizable, TuiResizer} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-editor-resizable',
    imports: [TuiResizable, TuiResizer],
    templateUrl: './editor-resizable.component.html',
    styleUrl: './editor-resizable.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.width]': 'hostWidth',
        '[style.height]': 'hostHeight',
    },
})
export class TuiEditorResizable {
    public readonly container =
        viewChild.required<ElementRef<HTMLDivElement>>('container');

    public readonly isEditable = input(false);

    public readonly autoHeight = input(false);

    public readonly width = input<number | string | null>(null);

    public readonly height = input<number | string | null>(null);

    public readonly sizeChange = output<readonly [width: number, height: number]>();

    protected get hostWidth(): number | string | null {
        return tuiIsNumber(this.width()) ? tuiPx(this.width() as number) : this.width();
    }

    protected get hostHeight(): number | string | null {
        if (this.autoHeight()) {
            return null;
        }

        const height = this.height();

        return tuiIsNumber(height) ? tuiPx(height) : height;
    }
}
