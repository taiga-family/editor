import"./chunk-DAQOROHW.js";var r=`import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiLoader} from '@taiga-ui/core';
import {
    type AbstractTuiEditor,
    provideTuiEditor,
    TUI_ATTACH_FILES_LOADER,
    TuiEditor,
    type TuiEditorAttachedFile,
    TuiEditorTool,
    TuiToolbar,
} from '@taiga-ui/editor';

import {fileLoader} from '../1/file-loader';
import {UploadService} from '../1/upload.service';

@Component({
    imports: [AsyncPipe, ReactiveFormsModule, TuiEditor, TuiLoader, TuiToolbar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor({link: {protocols: ['blob']}}),
        UploadService,
        {
            provide: TUI_ATTACH_FILES_LOADER,
            deps: [UploadService],
            useFactory: fileLoader,
        },
    ],
})
export default class Example {
    protected editorRef: AbstractTuiEditor | null = null;
    protected readonly uploadService = inject(UploadService);

    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Link,
        TuiEditorTool.Attach,
    ];

    protected readonly group = new FormGroup({
        header: new FormControl(''),
        main: new FormControl(''),
    });

    protected attach(files: TuiEditorAttachedFile[]): void {
        files.forEach((file) => this.editorRef?.setFileLink(file));
    }
}
`;export{r as default};
