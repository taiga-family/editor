import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/font/examples/3/index.ts?raw
var __default = "import {ChangeDetectionStrategy, Component, inject} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {TUI_IS_E2E, TuiItem} from '@taiga-ui/cdk';\nimport {\n    provideTuiEditor,\n    TuiEditor,\n    TuiEditorSocket,\n    TuiEditorTool,\n} from '@taiga-ui/editor';\nimport {TuiAccordion, TuiExpand} from '@taiga-ui/experimental';\n\nimport {ExampleTuiFontSizeTool} from './font-size-tool';\n\n@Component({\n    imports: [\n        ExampleTuiFontSizeTool,\n        ReactiveFormsModule,\n        TuiAccordion,\n        TuiEditor,\n        TuiEditorSocket,\n        TuiExpand,\n        TuiItem,\n    ],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [provideTuiEditor()],\n})\nexport default class Example {\n    protected readonly builtInTools = [TuiEditorTool.Undo];\n    protected readonly isE2E = inject(TUI_IS_E2E);\n\n    protected control = new FormControl(`\n        <p>Hello</p>\n        <p><span style=\"font-size: 24px\">Hello world</span></p>\n    `);\n}\n";
export {
  __default as default
};
//# sourceMappingURL=chunk-LF44YKUZ.js.map
