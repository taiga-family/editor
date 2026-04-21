import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/character-counter/examples/1/index.ts?raw
var __default = "import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {provideTuiEditor, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';\nimport {TuiProgress} from '@taiga-ui/kit';\nimport {type CharacterCountStorage} from '@tiptap/extension-character-count';\n\nconst limit = 280;\n\n@Component({\n    imports: [ReactiveFormsModule, TuiEditor, TuiProgress],\n    templateUrl: './index.html',\n    styleUrl: './index.less',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        provideTuiEditor(async () =>\n            import('@tiptap/extension-character-count').then(({CharacterCount}) =>\n                CharacterCount.configure({limit}),\n            ),\n        ),\n    ],\n})\nexport default class Example {\n    protected readonly wysiwyg = viewChild.required(TuiEditor);\n\n    protected readonly builtInTools = [TuiEditorTool.Undo];\n\n    protected limit = limit;\n\n    protected control = new FormControl(`\n        <p>Hello world</p>\n    `);\n\n    protected get characterCount(): CharacterCountStorage | null {\n        return this.wysiwyg().editor?.getOriginTiptapEditor()?.storage.characterCount;\n    }\n\n    protected get percentage(): number {\n        return Math.round((100 / this.limit) * (this.characterCount?.characters() ?? 0));\n    }\n}\n";
export {
  __default as default
};
//# sourceMappingURL=chunk-KUKBQVOP.js.map
