import {ChangeDetectionStrategy, Component, Injector} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiItemDirective} from '@taiga-ui/cdk';
import {TuiSvgComponent} from '@taiga-ui/core';
import {TUI_EDITOR_EXTENSIONS, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';

import {ExampleTuiPasteImageTool} from './image-tool/image-tool.component';
import {IMAGE_CLIPBOARD_PASTE_EXTENSION} from './image-tool/paste.extension';

@Component({
    standalone: true,
    imports: [
        TuiSvgComponent,
        ExampleTuiPasteImageTool,
        TuiItemDirective,
        ReactiveFormsModule,
        TuiEditor,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@taiga-ui/editor').then(({tuiCreateImageEditorExtension}) =>
                    tuiCreateImageEditorExtension({injector}).extend(
                        IMAGE_CLIPBOARD_PASTE_EXTENSION,
                    ),
                ),
            ],
        },
    ],
})
export default class Example {
    protected readonly builtInTools = [TuiEditorTool.Undo];
    protected readonly control = new FormControl('');
}
