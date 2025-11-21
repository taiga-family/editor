import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiIcon} from '@taiga-ui/core';
import {provideTuiEditor, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';

import {ExampleTuiSmilesTool} from './smiles-tool/smiles-tool.component';

@Component({
    standalone: true,
    imports: [ExampleTuiSmilesTool, ReactiveFormsModule, TuiEditor, TuiIcon, TuiItem],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor(async () =>
            import('./smiles-tool/emoji.extension').then(
                ({EmojiExtension}) => EmojiExtension,
            ),
        ),
    ],
})
export default class Example {
    protected readonly builtInTools = [TuiEditorTool.Undo];
    protected readonly control = new FormControl('');
}
