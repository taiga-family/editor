import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {TuiEditorComponent, tuiEditorOptionsProvider} from '@tbank/tui-editor';

@Component({
    standalone: true,
    imports: [TuiEditorComponent, ReactiveFormsModule, TuiActiveZoneDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiEditorOptionsProvider({
            appearence: 'no-border',
        }),
    ],
})
export default class ExampleComponent {
    protected readonly control = new FormControl('');
    protected readonly builtInTools = [];
}
