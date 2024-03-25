import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {
    TUI_EDITOR_DEFAULT_EDITOR_COLORS,
    TuiInputColorComponent,
} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    imports: [TuiTextfieldControllerModule, FormsModule, TuiInputColorComponent],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExampleComponent {
    protected color = '#ffdd2d';

    protected readonly palette = TUI_EDITOR_DEFAULT_EDITOR_COLORS;
}
