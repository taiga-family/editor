import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/legacy-html/examples/1/transformer.ts?raw
var transformer_default = "import {Injectable} from '@angular/core';\nimport {TuiValueTransformer} from '@taiga-ui/cdk';\nimport {tuiLegacyEditorConverter} from '@taiga-ui/editor';\n\n@Injectable()\nexport class ExampleEditorConvertLegacyHtmlTransformer extends TuiValueTransformer<string> {\n    public fromControlValue(controlValue: string): string {\n        return tuiLegacyEditorConverter(controlValue);\n    }\n\n    public toControlValue(componentValue: string): string {\n        return componentValue;\n    }\n}\n";
export {
  transformer_default as default
};
//# sourceMappingURL=chunk-XKRD6QKQ.js.map
