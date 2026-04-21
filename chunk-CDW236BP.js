import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/custom-tool/paste-emoji/examples/1/smiles-tool/smiles-tool.component.ts?raw
var smiles_tool_component_default = "import {ChangeDetectionStrategy, Component, inject} from '@angular/core';\nimport {TuiButton, TuiDropdown} from '@taiga-ui/core';\nimport {TuiTiptapEditorService} from '@taiga-ui/editor';\n\n@Component({\n    selector: 'smiles-tool',\n    imports: [TuiButton, TuiDropdown],\n    templateUrl: './smiles-tool.template.html',\n    styleUrl: './smiles-tool.styles.less',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class ExampleTuiSmilesTool {\n    private readonly editor = inject(TuiTiptapEditorService);\n\n    /* More smiles: https://www.w3schools.com/charsets/ref_emoji.asp */\n    protected readonly smiles = [\n        '&#129409;',\n        '&#9200;',\n        '&#9749;',\n        '&#9989;',\n        '&#10060;',\n        '&#10071;',\n        '&#10133;',\n        '&#128064;',\n        '&#128070;',\n        '&#128076;',\n        '&#128522;',\n        '&#128640;',\n    ];\n\n    protected insertSmile(smile: string): void {\n        this.editor\n            .getOriginTiptapEditor()\n            ?.chain()\n            .focus()\n            .insertContent(`<p data-type=\"emoji\">${smile}</p>`)\n            .insertContent(' ')\n            .run();\n    }\n}\n";
export {
  smiles_tool_component_default as default
};
//# sourceMappingURL=chunk-CDW236BP.js.map
