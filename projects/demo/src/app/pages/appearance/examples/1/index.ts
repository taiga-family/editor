import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiActiveZone, TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiEditor, tuiEditorOptionsProvider} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [TuiEditor, ReactiveFormsModule, TuiActiveZone, TuiAutoFocus],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiEditorOptionsProvider({
            appearance: 'no-border',
        }),
    ],
})
export default class Example {
    protected readonly control = new FormControl('');
    protected readonly builtInTools = [];
}
