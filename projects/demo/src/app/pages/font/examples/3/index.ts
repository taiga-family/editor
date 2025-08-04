import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiContentTable} from '@demo/shared/content-table';
import {TuiItem} from '@taiga-ui/cdk';
import {TUI_EDITOR_EXTENSIONS, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';

import {ExampleTuiFontSizeTool} from './font-size-tool';

@Component({
    standalone: true,
    imports: [
        ExampleTuiFontSizeTool,
        ReactiveFormsModule,
        TuiContentTable,
        TuiEditor,
        TuiItem,
    ],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),
                import('@taiga-ui/editor').then(
                    ({TuiFontSizeExtension}) => TuiFontSizeExtension,
                ),
            ],
        },
    ],
})
export default class Example {
    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected control = new FormControl(`
        <p>Hello</p>
        <p><span style="font-size: 24px">Hello world</span></p>
    `);
}
