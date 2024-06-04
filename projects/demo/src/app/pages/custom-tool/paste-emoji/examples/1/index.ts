import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiItemDirective} from '@taiga-ui/cdk';
import {TuiSvgComponent} from '@taiga-ui/core';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

import {ExampleTuiSmilesToolComponent} from './smiles-tool/smiles-tool.component';

@Component({
    standalone: true,
    imports: [
        TuiSvgComponent,
        ExampleTuiSmilesToolComponent,
        TuiItemDirective,
        ReactiveFormsModule,
        TuiEditorComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('./smiles-tool/emoji.extension').then(
                    ({EmojiExtension}) => EmojiExtension,
                ),
            ],
        },
    ],
})
export default class ExampleComponent {
    protected readonly builtInTools = [TuiEditorTool.Undo];
    protected readonly control = new FormControl('');
}
