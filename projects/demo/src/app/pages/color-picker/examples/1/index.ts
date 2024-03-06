import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {
    TUI_EDITOR_DEFAULT_EDITOR_TOOLS,
    TuiInputColorComponent,
} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    selector: 'tui-color-picker-example-1',
    imports: [TuiTextfieldControllerModule, FormsModule, TuiInputColorComponent],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiColorPickerExample1 {
    protected color = '#ffdd2d';

    protected readonly palette = TUI_EDITOR_DEFAULT_EDITOR_TOOLS;
}
