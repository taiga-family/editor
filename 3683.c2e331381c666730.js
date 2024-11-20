(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[3683],{3683:t=>{t.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {TuiItem} from '@taiga-ui/cdk';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditor,\n    TuiEditorSocket,\n    TuiEditorTool,\n} from '@taiga-ui/editor';\n\nimport {ExampleTuiFontSizeTool} from './font-size-tool';\n\n@Component({\n    standalone: true,\n    imports: [\n        ExampleTuiFontSizeTool,\n        ReactiveFormsModule,\n        TuiEditor,\n        TuiEditorSocket,\n        TuiItem,\n    ],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),\n                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),\n                import('@taiga-ui/editor').then(\n                    ({TuiFontSizeExtension}) => TuiFontSizeExtension,\n                ),\n            ],\n        },\n    ],\n})\nexport default class Example {\n    protected readonly builtInTools = [TuiEditorTool.Undo];\n\n    protected control = new FormControl(`\n        <p>Hello</p>\n        <p><span style=\"font-size: 24px\">Hello world</span></p>\n    `);\n}\n"}}]);