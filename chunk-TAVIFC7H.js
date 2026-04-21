import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/custom-tool/color-picker/examples/1/index.ts?raw
var __default = "import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {provideTuiEditor, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';\n\nimport {CustomColorPicker} from './custom-color-picker';\n\n@Component({\n    imports: [CustomColorPicker, ReactiveFormsModule, TuiEditor],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [provideTuiEditor()],\n})\nexport default class Example {\n    protected readonly builtInTools = [TuiEditorTool.Undo];\n\n    protected readonly control = new FormControl('');\n}\n";
export {
  __default as default
};
//# sourceMappingURL=chunk-TAVIFC7H.js.map
