import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/forms/examples/1/index.ts?raw
var __default = "import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';\nimport {TuiButton, TuiError, tuiValidationErrorsProvider} from '@taiga-ui/core';\nimport {provideTuiEditor, TuiEditor} from '@taiga-ui/editor';\n\n@Component({\n    imports: [ReactiveFormsModule, TuiButton, TuiEditor, TuiError],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        provideTuiEditor(),\n        tuiValidationErrorsProvider({required: 'Field is required'}),\n    ],\n})\nexport default class Example {\n    protected readonly control = new FormControl('<p>Text</p>', Validators.required);\n\n    protected reset(): void {\n        this.control.setValue('');\n    }\n\n    protected toggleDisabled(): void {\n        if (this.control.disabled) {\n            this.control.enable();\n        } else {\n            this.control.disable();\n        }\n    }\n}\n";
export {
  __default as default
};
//# sourceMappingURL=chunk-QL7ZXQGZ.js.map
