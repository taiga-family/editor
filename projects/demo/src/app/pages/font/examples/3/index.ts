import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {PreviewOutput} from '@demo/shared/preview-output';
import {TuiItem} from '@taiga-ui/cdk';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';

import {ExampleTuiFontSizeTool} from './font-size-tool';

@Component({
    standalone: true,
    imports: [
        ExampleTuiFontSizeTool,
        PreviewOutput,
        ReactiveFormsModule,
        TuiEditor,
        TuiEditorSocket,
        TuiItem,
    ],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideTuiEditor()],
})
export default class Example {
    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected control = new FormControl(`
        <p>Hello</p>
        <p><span style="font-size: 24px">Hello world</span></p>
    `);
}
