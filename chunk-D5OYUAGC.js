import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/options/examples/1/index.ts?raw
var __default = "import {ChangeDetectionStrategy, Component, inject} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {WA_IS_E2E} from '@ng-web-apis/platform';\nimport {TuiItem} from '@taiga-ui/cdk';\nimport {TuiExpand} from '@taiga-ui/core';\nimport {\n    provideTuiEditor,\n    provideTuiEditorOptions,\n    TuiEditor,\n    TuiEditorSocket,\n    TuiEditorTool,\n} from '@taiga-ui/editor';\nimport {TuiAccordion} from '@taiga-ui/kit';\n\n@Component({\n    imports: [\n        ReactiveFormsModule,\n        TuiAccordion,\n        TuiEditor,\n        TuiEditorSocket,\n        TuiExpand,\n        TuiItem,\n    ],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        provideTuiEditorOptions({parseOptions: {preserveWhitespace: 'full'}}),\n        provideTuiEditor(),\n    ],\n})\nexport default class Example {\n    protected readonly builtInTools = [TuiEditorTool.Undo];\n    protected readonly isE2E = inject(WA_IS_E2E);\n    protected control = new FormControl('test text\\n\\rtest text 2');\n}\n";
export {
  __default as default
};
//# sourceMappingURL=chunk-D5OYUAGC.js.map
