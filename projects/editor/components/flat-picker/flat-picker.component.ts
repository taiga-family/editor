import {ChangeDetectionStrategy, Component, inject, model} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {type TuiPoint} from '@taiga-ui/core/types';
import {TuiPickerService} from '@taiga-ui/editor/services';

@Component({
    selector: 'tui-flat-picker',
    templateUrl: './flat-picker.template.html',
    styleUrl: './flat-picker.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiPickerService],
})
export class TuiFlatPicker {
    public readonly value = model<TuiPoint>([0, 0]);

    protected readonly $ = inject(TuiPickerService)
        .pipe(takeUntilDestroyed())
        .subscribe((point) => {
            this.value.set(point);
        });

    public get left(): number {
        return this.value()[0] * 100;
    }

    public get top(): number {
        return this.value()[1] * 100;
    }
}
