import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {PreviewOutput} from '@demo/shared/preview-output';
import {TuiLoader} from '@taiga-ui/core';
import {
    provideTuiEditor,
    TUI_ATTACH_FILES_LOADER,
    TuiEditor,
    type TuiEditorAttachedFile,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';

import {fileLoader} from './file-loader';
import {FileIoService} from './filesio.service';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        PreviewOutput,
        ReactiveFormsModule,
        TuiEditor,
        TuiEditorSocket,
        TuiLoader,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor(),
        {
            provide: TUI_ATTACH_FILES_LOADER,
            deps: [FileIoService],
            useFactory: fileLoader,
        },
    ],
})
export default class Example {
    @ViewChild(TuiEditor)
    private readonly wysiwyg?: TuiEditor;

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
        files.forEach((file) => this.wysiwyg?.editor?.setFileLink(file));
    }
}
