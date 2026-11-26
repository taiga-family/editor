import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/highlight/code/examples/1/index.ts?raw
var __default = "import {ChangeDetectionStrategy, Component, inject, type OnInit} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {WA_IS_E2E} from '@ng-web-apis/platform';\nimport {tuiRawLoad, tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';\nimport {TuiItem} from '@taiga-ui/cdk';\nimport {TuiExpand} from '@taiga-ui/core';\nimport {\n    provideTuiEditor,\n    TuiEditor,\n    TuiEditorSocket,\n    TuiEditorTool,\n} from '@taiga-ui/editor';\nimport {TuiAccordion} from '@taiga-ui/kit';\n\n@Component({\n    imports: [\n        ReactiveFormsModule,\n        TuiAccordion,\n        TuiEditor,\n        TuiEditorSocket,\n        TuiExpand,\n        TuiItem,\n    ],\n    templateUrl: './index.html',\n    styleUrl: './index.less',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [provideTuiEditor()],\n})\nexport default class Example implements OnInit {\n    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Code];\n    protected readonly isE2E = inject(WA_IS_E2E);\n    protected control = new FormControl('');\n\n    public ngOnInit(): void {\n        void tuiRawLoad(import('./example.md?raw')).then((raw) => {\n            const [code] = tuiTryParseMarkdownCodeBlock(raw);\n\n            this.control.patchValue(code ?? null);\n        });\n    }\n}\n";
export {
  __default as default
};
//# sourceMappingURL=chunk-6UTNX7SI.js.map
