import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiIcon} from '@taiga-ui/core';
import {provideTuiEditor, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';

import {ExampleTuiPasteImageTool} from './image-tool/image-tool.component';
import {IMAGE_CLIPBOARD_PASTE_EXTENSION} from './image-tool/paste.extension';

@Component({
    standalone: true,
    imports: [ExampleTuiPasteImageTool, ReactiveFormsModule, TuiEditor, TuiIcon, TuiItem],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor({}, async (injector) =>
            import('@taiga-ui/editor').then(({tuiCreateImageEditorExtension}) =>
                tuiCreateImageEditorExtension({injector}).extend(
                    IMAGE_CLIPBOARD_PASTE_EXTENSION,
                ),
            ),
        ),
    ],
})
export default class Example {
    protected readonly builtInTools = [TuiEditorTool.Undo];
    protected readonly control = new FormControl('');
}
