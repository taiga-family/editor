import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {takeUntil} from 'rxjs';

import {TuiPickerService} from '../../../services/picker.service';

@Component({
    standalone: true,
    selector: 'tui-linear-picker',
    templateUrl: './linear-picker.template.html',
    styleUrls: ['./linear-picker.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, TuiPickerService],
})
export class TuiLinearPickerComponent {
    @Input()
    public value = 0;

    @Output()
    public readonly valueChange = new EventEmitter<number>();

    constructor() {
        inject(TuiPickerService)
            .pipe(takeUntil(inject(TuiDestroyService, {self: true})))
            .subscribe(([x]) => {
                this.value = x;
                this.valueChange.emit(x);
            });
    }

    protected get left(): number {
        return this.value * 100;
    }
}
