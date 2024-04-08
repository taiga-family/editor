import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import type {TuiPoint} from '@taiga-ui/core';
import {takeUntil} from 'rxjs';

import {TuiPickerService} from '../../../services/picker.service';

@Component({
    standalone: true,
    selector: 'tui-flat-picker',
    templateUrl: './flat-picker.template.html',
    styleUrls: ['./flat-picker.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, TuiPickerService],
})
export class TuiFlatPickerComponent {
    @Input()
    public value: TuiPoint = [0, 0];

    @Output()
    public readonly valueChange = new EventEmitter<[number, number]>();

    constructor() {
        inject(TuiPickerService)
            .pipe(takeUntil(inject(TuiDestroyService, {self: true})))
            .subscribe(point => {
                this.value = point;
                this.valueChange.emit([point[0], point[1]]);
            });
    }

    protected get left(): number {
        return this.value[0] * 100;
    }

    protected get top(): number {
        return this.value[1] * 100;
    }
}
