import"./chunk-DAQOROHW.js";var t=`import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiButton, TuiError, tuiValidationErrorsProvider} from '@taiga-ui/core';
import {provideTuiEditor, TuiEditor} from '@taiga-ui/editor';

@Component({
    imports: [ReactiveFormsModule, TuiButton, TuiEditor, TuiError],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor(),
        tuiValidationErrorsProvider({required: 'Field is required'}),
    ],
})
export default class Example {
    protected readonly control = new FormControl('<p>Text</p>', Validators.required);

    protected reset(): void {
        this.control.setValue('');
    }

    protected toggleDisabled(): void {
        if (this.control.disabled) {
            this.control.enable();
        } else {
            this.control.disable();
        }
    }
}
`;export{t as default};
