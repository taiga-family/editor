import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiAutoFocusModule} from '@taiga-ui/cdk';
import {TuiEditorComponent, tuiEditorOptionsProvider} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    selector: 'tui-editor-appearance-example-1',
    imports: [TuiEditorComponent, ReactiveFormsModule, TuiAutoFocusModule],
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
export class TuiEditorAppearanceExample1 {
    protected readonly control = new FormControl('');
    protected readonly builtInTools = [];
}
