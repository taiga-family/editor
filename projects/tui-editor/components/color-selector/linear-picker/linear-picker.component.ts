import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiPoint} from '@taiga-ui/core';
import {TuiPickerService} from '@tinkoff/tui-editor/services';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-linear-picker',
    templateUrl: './linear-picker.template.html',
    styleUrls: ['./linear-picker.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, TuiPickerService],
})
export class TuiLinearPickerComponent {
    @Input()
    value = 0;

    @Output()
    readonly valueChange = new EventEmitter<number>();

    constructor(@Inject(TuiPickerService) point$: Observable<TuiPoint>) {
        point$.subscribe(([x]) => {
            this.value = x;
            this.valueChange.emit(x);
        });
    }

    get left(): number {
        return this.value * 100;
    }
}
