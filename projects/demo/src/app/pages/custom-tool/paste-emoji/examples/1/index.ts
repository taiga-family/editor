import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiItemModule} from '@taiga-ui/cdk';
import {TuiSvgModule} from '@taiga-ui/core';
import {TUI_EDITOR_EXTENSIONS, TuiEditorModule, TuiEditorTool} from '@tinkoff/tui-editor';

import {ExampleTuiSmilesToolComponent} from './smiles-tool/smiles-tool.component';

@Component({
    standalone: true,
    selector: 'tui-editor-paste-emoji-tool-example-1',
    imports: [
        TuiSvgModule,
        ExampleTuiSmilesToolComponent,
        TuiItemModule,
        TuiEditorModule,
        ReactiveFormsModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tinkoff/tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('./smiles-tool/emoji.extension').then(
                    ({EmojiExtension}) => EmojiExtension,
                ),
            ],
        },
    ],
})
export class TuiEditorPasteEmojiToolExample1 {
    readonly builtInTools = [TuiEditorTool.Undo];
    readonly control = new FormControl('');
}
