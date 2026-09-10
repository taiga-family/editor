import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/cleanup-html/examples/1/transformer.ts?raw
var transformer_default = "import {Injectable} from '@angular/core';\nimport {TuiValueTransformer} from '@taiga-ui/cdk';\n\n@Injectable()\nexport class ExampleEditorCleanupHtmlTransformer extends TuiValueTransformer<string> {\n    public fromControlValue(controlValue: string): string {\n        return controlValue;\n    }\n\n    public toControlValue(componentValue: string): string {\n        if (typeof DOMParser === 'undefined') {\n            return '';\n        }\n\n        const tree = new DOMParser().parseFromString(componentValue, 'text/html');\n\n        tree.body.querySelectorAll('*').forEach((element) => {\n            // now we can manipulate with any elements\n            // and cleanup any attributes (class for example)\n            element.removeAttribute('class');\n            element.removeAttribute('style');\n        });\n\n        return tree.body.innerHTML;\n    }\n}\n";
export {
  transformer_default as default
};
//# sourceMappingURL=chunk-ZP2MW3V6.js.map
