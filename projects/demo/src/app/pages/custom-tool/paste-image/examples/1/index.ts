import {ChangeDetectionStrategy, Component, INJECTOR, Injector} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@tbank/tui-editor';

import {IMAGE_CLIPBOARD_PASTE_EXTENSION} from './image-tool/paste.extension';

@Component({
    selector: 'tui-editor-paste-image-tool-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [INJECTOR],
            useFactory: (injector: Injector) => [
                import('@tbank/tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tbank/tui-editor/extensions/image-editor').then(
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
