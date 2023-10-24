import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'tui-color-picker-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiColorPickerExample4 {
    readonly mask = {mask: ['#', ...new Array(6).fill(/[0-9a-f]/i)]};

    value = '#ffdd2d';
}
