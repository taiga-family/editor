(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[3979],{33979:o=>{o.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditorComponent,\n    TuiEditorTool,\n} from '@tinkoff/tui-editor';\n\nimport {CustomColorPickerComponent} from './custom-color-picker/custom-color-picker.component';\n\n@Component({\n    standalone: true,\n    imports: [CustomColorPickerComponent, ReactiveFormsModule, TuiEditorComponent],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),\n                import('@tiptap/extension-text-style').then(\n                    ({default: TextStyle}) => TextStyle,\n                ),\n                import('@tinkoff/tui-editor').then(({TuiFontColor}) => TuiFontColor),\n                import('@tinkoff/tui-editor').then(\n                    ({TuiBackgroundColor}) => TuiBackgroundColor,\n                ),\n            ],\n        },\n    ],\n})\nexport default class ExampleComponent {\n    protected readonly builtInTools = [TuiEditorTool.Undo];\n\n    protected readonly control = new FormControl('');\n}\n"}}]);