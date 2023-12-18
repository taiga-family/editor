import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiLoaderModule} from '@taiga-ui/core';
import {
    TUI_ATTACH_FILES_LOADER,
    TUI_EDITOR_EXTENSIONS,
    TuiEditorAttachedFile,
    TuiEditorComponent,
    TuiEditorModule,
    TuiEditorSocketModule,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

import {fileLoader} from './file-loader';
import {FileIoService} from './filesio.service';

@Component({
    standalone: true,
    selector: 'tui-editor-upload-files-example-1',
    imports: [
        TuiEditorSocketModule,
        TuiLoaderModule,
        TuiEditorModule,
        AsyncPipe,
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
                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),
                import('@tinkoff/tui-editor/extensions/link').then(
                    ({TuiLink}) => TuiLink,
                ),
                import('@tinkoff/tui-editor/extensions/jump-anchor').then(
                    ({TuiJumpAnchor}) => TuiJumpAnchor,
                ),
                import('@tinkoff/tui-editor/extensions/file-link').then(
                    ({TuiFileLink}) => TuiFileLink,
                ),
            ],
        },
        {
            provide: TUI_ATTACH_FILES_LOADER,
            deps: [FileIoService],
            useFactory: fileLoader,
        },
    ],
})
export class TuiEditorUploadFilesExample1 {
    @ViewChild(TuiEditorComponent)
    private readonly wysiwyg?: TuiEditorComponent;

    readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Link,
        TuiEditorTool.Attach,
    ];

    control = new FormControl('');

    constructor(@Inject(FileIoService) readonly fileIoService: FileIoService) {}

    /**
     * @note: attach file as a link
     * you can also implement your own file mapping mechanism
     * because you have all the necessary data for this
     */
    attach(files: TuiEditorAttachedFile[]): void {
        files.forEach(file => this.wysiwyg?.editor?.setFileLink(file));
    }
}
