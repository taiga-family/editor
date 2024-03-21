import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDocPageModule} from '@taiga-ui/addon-doc';

const html = '<b>HTML</b><p>with a paragraph</p><div>a div</div>and a plain text node';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, TuiDocPageModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExampleComponent {
    protected model = 'Initial value';

    protected disabled = true;

    protected readonly control = new FormControl('Initial value', {updateOn: 'blur'});

    protected readonly group = new FormGroup({
        control: new FormControl('Initial value'),
    });

    constructor() {
        this.group.disable();
    }

    protected onToggleModelDisabled(): void {
        this.disabled = !this.disabled;
    }

    protected onModelSetValue(): void {
        this.model = html;
    }

    protected onToggleControlDisabled(): void {
        if (this.control.disabled) {
            this.control.enable();
        } else {
            this.control.disable();
        }
    }

    protected onControlSetValue(): void {
        this.control.setValue(html);
    }

    protected onToggleNameDisabled(): void {
        if (this.group.disabled) {
            this.group.enable();
        } else {
            this.group.disable();
        }
    }

    protected onNameSetValue(): void {
        this.group.patchValue({
            control: html,
        });
    }
}
