import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {tuiEditorOptionsProvider} from '@tinkoff/tui-editor';

@Component({
    selector: 'tui-editor-appearance-example-1',
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
export class TuiEditorAppearanceExample1 {
    readonly control = new FormControl('');
    readonly builtInTools = [];
}
