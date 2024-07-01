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
} from '@tinkoff/tui-editor';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-editor-embed-pdf-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [INJECTOR],
            useFactory: (injector: Injector) => [
                import('@tinkoff/tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),
                import('@tinkoff/tui-editor/extensions/link').then(
                    ({TuiLink}) => TuiLink,
                ),
                import('@tinkoff/tui-editor/extensions/file-link').then(
                    ({TuiFileLink}) => TuiFileLink,
                ),
                import('@tinkoff/tui-editor/extensions/iframe-editor').then(
                    ({createIframeEditorExtension}) =>
                        createIframeEditorExtension(injector),
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
                accept: 'application/pdf',
                multiple: false,
            },
        },
    ],
    host: {
        class: 'html5-editor-example',
        '[class._e2e]': 'isE2E',
    },
})
export class TuiEditorEmbedPdfExample1 {
    @ViewChild(TuiEditorComponent)
    private readonly wysiwyg?: TuiEditorComponent;

    readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Link,
        TuiEditorTool.Attach,
    ];

    readonly control = new FormControl(
        `
            <p>sample.pdf</p>
            <iframe
                data-type="iframe-editor"
                src="https://mozilla.github.io/pdf.js/web/viewer.html?url=https://pdfobject.com/pdf/sample.pdf"
                width="100%"
                height="300"
            ></iframe>
            <p>Hello world</p>
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
        this.wysiwyg?.editorService
            ?.getOriginTiptapEditor()
            ?.chain()
            .focus('end')
            .createParagraphNear()
            .insertContent(file.name)
            .run();

        this.wysiwyg?.editorService?.setIframe({
            allowfullscreen: false,
            frameborder: null,
            // For example, src: `https://mozilla.github.io/pdf.js/web/viewer.html?url${file.link}`,
            src: `data:application/pdf;base64${file.link}`,
            width: '100%',
            height: 300,
        });
    }
}
