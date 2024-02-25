import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Injector,
    ViewChild,
} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {TUI_IS_E2E, tuiPure, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {
    TUI_ATTACH_FILES_LOADER,
    TUI_ATTACH_FILES_OPTIONS,
    TUI_EDITOR_EXTENSIONS,
    TuiEditorAttachedFile,
    TuiEditorComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';
import {map, Observable} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-editor-embed-html5-example-1',
    imports: [ReactiveFormsModule, TuiEditorComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (_injector: Injector) => [
                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),
                import('@tinkoff/tui-editor').then(({TuiLink}) => TuiLink),
                import('@tinkoff/tui-editor').then(({TuiJumpAnchor}) => TuiJumpAnchor),
                import('@tinkoff/tui-editor').then(({TuiFileLink}) => TuiFileLink),
                import('@tinkoff/tui-editor').then(({TuiVideo}) => TuiVideo),
                import('@tinkoff/tui-editor').then(({TuiAudio}) => TuiAudio),
                import('@tinkoff/tui-editor').then(({TuiSource}) => TuiSource),
            ],
        },
        {
            provide: TUI_ATTACH_FILES_LOADER,
            deps: [],
            useFactory:
                () =>
                ([file]: File[]): Observable<
                    Array<TuiEditorAttachedFile<{type: string}>>
                > => {
                    const fileReader = new FileReader();

                    // For example, instead of uploading to a file server,
                    // we convert the result immediately into content to base64
                    fileReader.readAsDataURL(file);

                    return tuiTypedFromEvent(fileReader, 'load').pipe(
                        map(() => [
                            {
                                name: file.name,

                                /* base64 or link to the file on your server */
                                link: String(fileReader.result),

                                attrs: {
                                    type: file.type,
                                },
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
export class TuiEditorEmbedHtml5Example1 {
    @ViewChild(TuiEditorComponent)
    private readonly wysiwyg?: TuiEditorComponent;

    private readonly sanitizer = inject(DomSanitizer);

    readonly isE2E = inject(TUI_IS_E2E);

    readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Link,
        TuiEditorTool.Attach,
    ];

    readonly control = new FormControl(
        `
            <p>Here is video: </p>

            <video controls="controls" width="100%" preload="${
                this.isE2E ? 'none' : 'auto'
            }" controlsList="nodownload">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
            </video>

            <p>Here is audio: </p>
            <audio controls style="width: 100%" preload="${
                this.isE2E ? 'none' : 'auto'
            }" controlsList="nodownload">
              <source src="https://www.w3docs.com/build/audios/audio.mp3" type="audio/mp3">
            </audio>

            <p></p>
            `,
        Validators.required,
    );

    @tuiPure
    safe(content: string | null): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(content ?? '');
    }

    attach([file]: Array<TuiEditorAttachedFile<{type: string}>>): void {
        const tag = `${file.attrs?.type ?? ''}`.split('/')[0];

        this.wysiwyg?.editor
            ?.getOriginTiptapEditor()
            .commands.insertContent(
                `<${tag} controls width="100%"><source src="${file.link}" type="${file.attrs?.type}"></${tag}><p><a href="${file.link}" download="${file.name}">Download ${file.name}</a></p>`,
            );
    }
}
