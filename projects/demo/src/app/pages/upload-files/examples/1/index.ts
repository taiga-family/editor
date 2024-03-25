import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiLoaderModule} from '@taiga-ui/core';
import type {TuiEditorAttachedFile} from '@tinkoff/tui-editor';
import {
    TUI_ATTACH_FILES_LOADER,
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorSocketComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

import {fileLoader} from './file-loader';
import {FileIoService} from './filesio.service';

@Component({
    standalone: true,
    imports: [
        TuiLoaderModule,
        AsyncPipe,
        ReactiveFormsModule,
        TuiEditorComponent,
        TuiEditorSocketComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),
                import('@tinkoff/tui-editor').then(({TuiLink}) => TuiLink),
                import('@tinkoff/tui-editor').then(({TuiJumpAnchor}) => TuiJumpAnchor),
                import('@tinkoff/tui-editor').then(({TuiFileLink}) => TuiFileLink),
            ],
        },
        {
            provide: TUI_ATTACH_FILES_LOADER,
            deps: [FileIoService],
            useFactory: fileLoader,
        },
    ],
})
export default class ExampleComponent {
    @ViewChild(TuiEditorComponent)
    private readonly wysiwyg?: TuiEditorComponent;

    protected readonly fileIoService = inject(FileIoService);

    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Link,
        TuiEditorTool.Attach,
    ];

    protected control = new FormControl('');

    /**
     * @note: attach file as a link
     * you can also implement your own file mapping mechanism
     * because you have all the necessary data for this
     */
    protected attach(files: TuiEditorAttachedFile[]): void {
        files.forEach(file => this.wysiwyg?.editor?.setFileLink(file));
    }
}
