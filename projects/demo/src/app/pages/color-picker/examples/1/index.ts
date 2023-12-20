import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {defaultEditorColors, TuiInputColorComponent} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    selector: 'tui-color-picker-example-1',
    imports: [TuiTextfieldControllerModule, FormsModule, TuiInputColorComponent],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiColorPickerExample1 {
    color = '#ffdd2d';

    readonly palette = defaultEditorColors;
}
