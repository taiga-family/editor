import {ChangeDetectionStrategy, Component, inject, model} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiPickerService} from '@taiga-ui/editor/services';

@Component({
    selector: 'tui-linear-picker',
    templateUrl: './linear-picker.template.html',
    styleUrl: './linear-picker.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiPickerService],
})
export class TuiLinearPicker {
    public readonly value = model(0);

    protected readonly $ = inject(TuiPickerService)
        .pipe(takeUntilDestroyed())
        .subscribe(([x]) => {
            this.value.set(x);
        });

    public get left(): number {
        return this.value() * 100;
    }
}
