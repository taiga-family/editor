import type {Injector} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    INJECTOR,
    ViewChild,
} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import type {SafeHtml} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {TUI_IS_E2E, tuiPure, tuiTypedFromEvent} from '@taiga-ui/cdk';
import type {TuiEditorAttachedFile} from '@taiga-ui/editor';
import {
    TUI_ATTACH_FILES_LOADER,
    TUI_ATTACH_FILES_OPTIONS,
    TUI_EDITOR_EXTENSIONS,
    TuiEditor,
    TuiEditorTool,
} from '@taiga-ui/editor';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiEditor],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [INJECTOR],
            useFactory: (injector: Injector) => [
                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),
                import('@taiga-ui/editor').then(({TuiLink}) => TuiLink),
                import('@taiga-ui/editor').then(({TuiFileLink}) => TuiFileLink),
                import('@taiga-ui/editor').then(({tuiCreateIframeEditorExtension}) =>
                    tuiCreateIframeEditorExtension({injector}),
                ),
            ],
        },
        {
            provide: TUI_ATTACH_FILES_LOADER,
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
export default class Example {
    @ViewChild(TuiEditor)
    private readonly editor?: TuiEditor;

    private readonly sanitizer = inject(DomSanitizer);

    protected readonly isE2E = inject(TUI_IS_E2E);

    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Link,
        TuiEditorTool.Attach,
    ];

    protected readonly control = new FormControl(
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

    @tuiPure
    protected safe(content: string | null): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(content ?? '');
    }

    protected attach([file]: Array<TuiEditorAttachedFile<{type: string}>>): void {
        this.editor?.editorService
            ?.getOriginTiptapEditor()
            ?.chain()
            .focus('end')
            .createParagraphNear()
            .insertContent(file.name)
            .run();

        this.editor?.editorService?.setIframe({
            allowfullscreen: false,
            frameborder: null,
            // For example, src: `https://mozilla.github.io/pdf.js/web/viewer.html?url${file.link}`,
            src: `data:application/pdf;base64${file.link}`,
            width: '100%',
            height: 300,
        });
    }
}
