import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/toolbar/bottom/examples/1/index.ts?raw
var __default = "import {ChangeDetectionStrategy, Component, inject} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {TuiButton, TuiDialogService} from '@taiga-ui/core';\nimport {provideTuiEditor, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';\n\n@Component({\n    imports: [ReactiveFormsModule, TuiButton, TuiEditor],\n    templateUrl: './index.html',\n    styleUrl: './index.less',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [provideTuiEditor()],\n})\nexport default class Example {\n    private readonly dialog = inject(TuiDialogService);\n\n    protected readonly builtInTools = [\n        TuiEditorTool.Undo,\n        TuiEditorTool.Link,\n        TuiEditorTool.Img,\n    ];\n\n    protected readonly control = new FormControl('');\n\n    protected send(): void {\n        this.dialog.open(this.control.value).subscribe();\n    }\n}\n";
export {
  __default as default
};
//# sourceMappingURL=chunk-ZA26WTWN.js.map
