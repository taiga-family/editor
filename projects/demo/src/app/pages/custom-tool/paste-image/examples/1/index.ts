import {ChangeDetectionStrategy, Component, Injector} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiItemModule} from '@taiga-ui/cdk';
import {TuiSvgModule} from '@taiga-ui/core';
import {TUI_EDITOR_EXTENSIONS, TuiEditorModule, TuiEditorTool} from '@tinkoff/tui-editor';

import {ExampleTuiPasteImageToolComponent} from './image-tool/image-tool.component';
import {IMAGE_CLIPBOARD_PASTE_EXTENSION} from './image-tool/paste.extension';

@Component({
    standalone: true,
    selector: 'tui-editor-paste-image-tool-example-1',
    imports: [
        TuiSvgModule,
        ExampleTuiPasteImageToolComponent,
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
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import('@tinkoff/tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tinkoff/tui-editor/extensions/image-editor').then(
                    ({tuiCreateImageEditorExtension}) =>
                        tuiCreateImageEditorExtension({injector}).extend(
                            IMAGE_CLIPBOARD_PASTE_EXTENSION,
                        ),
                ),
            ],
        },
    ],
})
export class TuiEditorPasteImageToolExample1 {
    readonly builtInTools = [TuiEditorTool.Undo];
    readonly control = new FormControl('');
}
