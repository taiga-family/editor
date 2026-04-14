import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, viewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TUI_IS_E2E, TuiItem} from '@taiga-ui/cdk';
import {TuiLoader} from '@taiga-ui/core';
import {
    provideTuiEditor,
    TUI_ATTACH_FILES_LOADER,
    TuiEditor,
    type TuiEditorAttachedFile,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {TuiAccordion, TuiExpand} from '@taiga-ui/experimental';

import {fileLoader} from './file-loader';
import {UploadService} from './upload.service';

@Component({
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiAccordion,
        TuiEditor,
        TuiEditorSocket,
        TuiExpand,
        TuiItem,
        TuiLoader,
    ],
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
    private readonly wysiwyg = viewChild.required(TuiEditor);

    protected readonly uploadService = inject(UploadService);

    protected readonly isE2E = inject(TUI_IS_E2E);

    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Link,
        TuiEditorTool.Attach,
    ];

    protected control = new FormControl('');

    protected attach(files: TuiEditorAttachedFile[]): void {
        files.forEach((file) => this.wysiwyg().editor?.setFileLink(file));
    }
}
