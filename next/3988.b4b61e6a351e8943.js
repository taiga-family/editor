(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[3988],{83988:e=>{e.exports="import type {Injector} from '@angular/core';\nimport {\n    ChangeDetectionStrategy,\n    Component,\n    inject,\n    INJECTOR,\n    ViewChild,\n} from '@angular/core';\nimport {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';\nimport type {SafeHtml} from '@angular/platform-browser';\nimport {DomSanitizer} from '@angular/platform-browser';\nimport {TUI_IS_E2E, tuiPure, tuiTypedFromEvent} from '@taiga-ui/cdk';\nimport type {TuiEditorAttachedFile} from '@taiga-ui/editor';\nimport {\n    TUI_ATTACH_FILES_LOADER,\n    TUI_ATTACH_FILES_OPTIONS,\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditor,\n    TuiEditorTool,\n} from '@taiga-ui/editor';\nimport type {Observable} from 'rxjs';\nimport {map} from 'rxjs';\n\n@Component({\n    standalone: true,\n    imports: [ReactiveFormsModule, TuiEditor],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [INJECTOR],\n            useFactory: (injector: Injector) => [\n                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),\n                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),\n                import('@taiga-ui/editor').then(({TuiLink}) => TuiLink),\n                import('@taiga-ui/editor').then(({TuiFileLink}) => TuiFileLink),\n                import('@taiga-ui/editor').then(({tuiCreateIframeEditorExtension}) =>\n                    tuiCreateIframeEditorExtension({injector}),\n                ),\n            ],\n        },\n        {\n            provide: TUI_ATTACH_FILES_LOADER,\n            useFactory:\n                () =>\n                ([file]: File[]): Observable<\n                    Array<TuiEditorAttachedFile<{type: string}>>\n                > => {\n                    const fileReader = new FileReader();\n\n                    // For example, instead of uploading to a file server,\n                    // we convert the result immediately into content to base64\n                    fileReader.readAsDataURL(file);\n\n                    return tuiTypedFromEvent(fileReader, 'load').pipe(\n                        map(() => [\n                            {\n                                name: file.name,\n\n                                /* base64 or link to the file on your server */\n                                link: String(fileReader.result),\n\n                                attrs: {\n                                    type: file.type,\n                                },\n                            },\n                        ]),\n                    );\n                },\n        },\n        {\n            provide: TUI_ATTACH_FILES_OPTIONS,\n            useValue: {\n                accept: 'application/pdf',\n                multiple: false,\n            },\n        },\n    ],\n    host: {\n        class: 'html5-editor-example',\n        '[class._e2e]': 'isE2E',\n    },\n})\nexport default class Example {\n    @ViewChild(TuiEditor)\n    private readonly editor?: TuiEditor;\n\n    private readonly sanitizer = inject(DomSanitizer);\n\n    protected readonly isE2E = inject(TUI_IS_E2E);\n\n    protected readonly builtInTools = [\n        TuiEditorTool.Undo,\n        TuiEditorTool.Link,\n        TuiEditorTool.Attach,\n    ];\n\n    protected readonly control = new FormControl(\n        `\n            <p>sample.pdf</p>\n            <iframe\n                data-type=\"iframe-editor\"\n                src=\"https://mozilla.github.io/pdf.js/web/viewer.html?url=https://pdfobject.com/pdf/sample.pdf\"\n                width=\"100%\"\n                height=\"300\"\n            ></iframe>\n            <p>Hello world</p>\n    `,\n        Validators.required,\n    );\n\n    @tuiPure\n    protected safe(content: string | null): SafeHtml {\n        return this.sanitizer.bypassSecurityTrustHtml(content ?? '');\n    }\n\n    protected attach([file]: Array<TuiEditorAttachedFile<{type: string}>>): void {\n        this.editor?.editorService\n            ?.getOriginTiptapEditor()\n            ?.chain()\n            .focus('end')\n            .createParagraphNear()\n            .insertContent(file.name)\n            .run();\n\n        this.editor?.editorService?.setIframe({\n            allowfullscreen: false,\n            frameborder: null,\n            // For example, src: `https://mozilla.github.io/pdf.js/web/viewer.html?url${file.link}`,\n            src: `data:application/pdf;base64${file.link}`,\n            width: '100%',\n            height: 300,\n        });\n    }\n}\n"}}]);