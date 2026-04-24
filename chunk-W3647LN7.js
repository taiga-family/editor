import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/font/examples/4/index.ts?raw
var __default = "import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {provideTuiEditor, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';\n\n@Component({\n    imports: [ReactiveFormsModule, TuiEditor],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        provideTuiEditor({\n            bold: false,\n            italic: false,\n            strike: false,\n        }),\n    ],\n})\nexport default class Example {\n    protected readonly builtInTools = [TuiEditorTool.Undo];\n    protected control = new FormControl('<p>Hello</p>');\n}\n";
export {
  __default as default
};
//# sourceMappingURL=chunk-W3647LN7.js.map
