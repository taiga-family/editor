import {ChangeDetectionStrategy, Component} from '@angular/core';
import {defaultEditorColors} from '../../../../../../../tui-editor';

@Component({
    selector: 'tui-color-picker-example-1',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiColorPickerExample1 {
    color = '#ffdd2d';

    readonly palette = defaultEditorColors;
}
