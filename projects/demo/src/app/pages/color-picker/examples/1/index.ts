import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TUI_EDITOR_DEFAULT_EDITOR_COLORS, TuiInputColor} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [TuiTextfield, FormsModule, TuiInputColor],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
    protected color = '#ffdd2d';

    protected readonly palette = TUI_EDITOR_DEFAULT_EDITOR_COLORS;
}
