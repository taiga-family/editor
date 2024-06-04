import {ChangeDetectionStrategy, Component, Injector} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiItemDirective} from '@taiga-ui/cdk';
import {TuiSvgComponent} from '@taiga-ui/core';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

import {ExampleTuiPasteImageToolComponent} from './image-tool/image-tool.component';
import {IMAGE_CLIPBOARD_PASTE_EXTENSION} from './image-tool/paste.extension';

@Component({
    standalone: true,
    imports: [
        TuiSvgComponent,
        ExampleTuiPasteImageToolComponent,
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
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tinkoff/tui-editor').then(({tuiCreateImageEditorExtension}) =>
                    tuiCreateImageEditorExtension({injector}).extend(
                        IMAGE_CLIPBOARD_PASTE_EXTENSION,
                    ),
                ),
            ],
        },
    ],
})
export default class ExampleComponent {
    protected readonly builtInTools = [TuiEditorTool.Undo];
    protected readonly control = new FormControl('');
}
