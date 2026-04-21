import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/custom-tool/paste-image/examples/1/index.ts?raw
var __default = "import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {TuiItem} from '@taiga-ui/cdk';\nimport {TuiIcon} from '@taiga-ui/core';\nimport {provideTuiEditor, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';\n\nimport {ExampleTuiPasteImageTool} from './image-tool/image-tool.component';\nimport {IMAGE_CLIPBOARD_PASTE_EXTENSION} from './image-tool/paste.extension';\n\n@Component({\n    imports: [ExampleTuiPasteImageTool, ReactiveFormsModule, TuiEditor, TuiIcon, TuiItem],\n    templateUrl: './index.html',\n    styleUrl: './index.less',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        provideTuiEditor(async (injector) =>\n            import('@taiga-ui/editor').then(({tuiCreateImageEditorExtension}) =>\n                tuiCreateImageEditorExtension({injector}).extend(\n                    IMAGE_CLIPBOARD_PASTE_EXTENSION,\n                ),\n            ),\n        ),\n    ],\n})\nexport default class Example {\n    protected readonly builtInTools = [TuiEditorTool.Undo];\n    protected readonly control = new FormControl('');\n}\n";
export {
  __default as default
};
//# sourceMappingURL=chunk-GYKQKKYE.js.map
