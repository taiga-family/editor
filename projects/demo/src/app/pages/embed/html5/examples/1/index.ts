import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    INJECTOR,
    Injector,
    ViewChild,
} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {TUI_IS_E2E, tuiPure, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {
    TUI_ATTACH_FILES_LOADER,
    TUI_ATTACH_FILES_OPTIONS,
    TUI_EDITOR_EXTENSIONS,
    TuiEditorAttachedFile,
    TuiEditorComponent,
    TuiEditorTool,
} from '@tbank/tui-editor';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-editor-embed-html5-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [INJECTOR],
            useFactory: (_injector: Injector) => [
                import('@tbank/tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),
                import('@tbank/tui-editor/extensions/link').then(({TuiLink}) => TuiLink),
                import('@tbank/tui-editor/extensions/jump-anchor').then(
                    ({TuiJumpAnchor}) => TuiJumpAnchor,
                ),
                import('@tbank/tui-editor/extensions/file-link').then(
                    ({TuiFileLink}) => TuiFileLink,
                ),
                import('@tbank/tui-editor/extensions/media').then(
                    ({TuiVideo}) => TuiVideo,
                ),
                import('@tbank/tui-editor/extensions/media').then(
                    ({TuiAudio}) => TuiAudio,
                ),
                import('@tbank/tui-editor/extensions/media').then(
                    ({TuiSource}) => TuiSource,
                ),
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

    constructor(
        @Inject(TUI_IS_E2E) readonly isE2E: boolean,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
    ) {}

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
