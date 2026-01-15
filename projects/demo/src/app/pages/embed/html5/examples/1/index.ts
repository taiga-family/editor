import {isPlatformServer} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Injectable,
    PLATFORM_ID,
    ViewChild,
} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {DomSanitizer, type SafeHtml} from '@angular/platform-browser';
import {PreviewOutput} from '@demo/shared/preview-output';
import {TUI_IS_E2E, tuiPure, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {
    provideTuiEditor,
    TUI_ATTACH_FILES_LOADER,
    TUI_ATTACH_FILES_OPTIONS,
    TuiEditor,
    type TuiEditorAttachedFile,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {map, type Observable, of, switchMap} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HttpMockUploader {
    public save(_base64: string): Observable<string> {
        return of(
            // mock
            'https://private-user-images.githubusercontent.com/20438370/398424241-231fe6f0-6c0a-481f-8856-f5da3a10f06b.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkyNzk0ODksIm5iZiI6MTczOTI3OTE4OSwicGF0aCI6Ii8yMDQzODM3MC8zOTg0MjQyNDEtMjMxZmU2ZjAtNmMwYS00ODFmLTg4NTYtZjVkYTNhMTBmMDZiLm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjExVDEzMDYyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTM5YTQ1ZDI2ZGE5ZjQ4MzBjNmEzNTIzN2JjMjE0ZWFkYjg0OGQyYmI4NGU0NTQ0Y2Q2MjYyNWI0MmFjNDgxYTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.8idoj74wxtWsQgdhSL09qvWp62Mv7Mzkl3uuiDYUyD4',
        );
    }
}

@Component({
    standalone: true,
    imports: [PreviewOutput, ReactiveFormsModule, TuiEditor, TuiEditorSocket],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor({
            video: true,
            audio: true,
            source: true,
        }),
        {
            provide: TUI_ATTACH_FILES_LOADER,
            deps: [HttpMockUploader],
            useFactory:
                (uploader: HttpMockUploader) =>
                ([file]: File[]): Observable<
                    Array<TuiEditorAttachedFile<{type: string}>>
                > => {
                    if (!file) {
                        return of([]);
                    }

                    const fileReader = new FileReader();

                    fileReader.readAsDataURL(file);

                    return tuiTypedFromEvent(fileReader, 'load').pipe(
                        switchMap(() => uploader.save(String(fileReader.result))),
                        map((link) => [
                            {
                                // Do not return base64 instead of link to binary
                                // because it's bad idea for your performance

                                link,

                                name: file.name,
                                attrs: {type: file.type},
                            },
                        ]),
                    );
                },
        },
        {
            provide: TUI_ATTACH_FILES_OPTIONS,
            useValue: {
                accept: 'video/mp4,video/x-m4v,video/*,audio/x-m4a,audio/*',
                multiple: false,
            },
        },
    ],
    host: {
        class: 'html5-editor-example',
        '[class._e2e]': 'isE2E',
    },
})
export default class Example {
    @ViewChild(TuiEditor)
    private readonly wysiwyg?: TuiEditor;

    private readonly sanitizer = inject(DomSanitizer);
    private readonly isNotStatic =
        inject(TUI_IS_E2E) || isPlatformServer(inject(PLATFORM_ID));

    protected readonly isE2E = inject(TUI_IS_E2E);

    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Link,
        TuiEditorTool.Attach,
    ];

    protected readonly control = new FormControl(
        this.isNotStatic
            ? ''
            : `
            <p>Here is video: </p>

            <video controls="controls" width="100%" preload="auto" controlsList="nodownload">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
            </video>

            <p>Here is audio: </p>
            <audio controls style="width: 100%" preload="auto" controlsList="nodownload">
              <source src="https://www.w3docs.com/build/audios/audio.mp3" type="audio/mp3">
            </audio>

            <p></p>
            `,
        Validators.required,
    );

    @tuiPure
    protected safe(content: string | null): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(content ?? '');
    }

    protected attach([file]: Array<TuiEditorAttachedFile<{type: string}>>): void {
        const tag = `${file?.attrs?.type ?? ''}`.split('/')[0];

        this.wysiwyg?.editor
            ?.getOriginTiptapEditor()
            ?.commands.insertContent(
                `<${tag} controls width="100%"><source src="${file?.link}" type="${file?.attrs?.type}"></${tag}><p><a href="${file?.link}" download="${file?.name}">Download ${file?.name}</a></p>`,
            );
    }
}
