import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {tuiEditorOptionsProvider} from '@tbank/tui-editor';

@Component({
    selector: 'tui-editor-appearance-example-1',
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
    readonly control = new FormControl('');
    readonly builtInTools = [];
}
