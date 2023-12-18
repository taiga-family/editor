import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiButtonModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'stackblitz-edit-button',
    imports: [TuiButtonModule],
    template: `
        <button
            appearance="flat"
            icon="assets/icons/stackblitz.svg"
            size="s"
            tuiButton
            type="button"
        >
            Edit
        </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackblitzEditButtonComponent {}
