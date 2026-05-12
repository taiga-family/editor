import {ChangeDetectionStrategy, Component, inject, model, output} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiPickerService} from '@taiga-ui/editor/services';

@Component({
    selector: 'tui-linear-multi-picker',
    templateUrl: './linear-multi-picker.template.html',
    styleUrl: './linear-multi-picker.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiPickerService],
    host: {'(document:mouseup)': 'onMouseUp()'},
})
export class TuiLinearMultiPicker {
    public readonly value = model<number[]>([0, 1]);

    protected readonly $ = inject(TuiPickerService)
        .pipe(takeUntilDestroyed())
        .subscribe(([x]) => this.onPicker(x));

    public readonly indexChange = output<number>();
    public index = Number.NaN;

    public onMouseUp(): void {
        this.index = Number.NaN;
    }

    public onMouseDown(index: number): void {
        this.updateIndex(index);
    }

    public onClick(index: number): void {
        if (this.value().length > 2) {
            this.updateValue(this.value().filter((_, i) => i !== index));
        }
    }

    private onPicker(x: number): void {
        if (Number.isNaN(this.index)) {
            this.updateIndex(this.value().length);
            this.value.set([...this.value(), 0]);
        }

        if (this.value().some((item, index) => item === x && index !== this.index)) {
            return;
        }

        this.updateValue(
            this.value().map((item, index) => (index === this.index ? x : item)),
        );
    }

    private updateIndex(index: number): void {
        this.index = index;
        this.indexChange.emit(index);
    }

    private updateValue(value: number[]): void {
        this.value.set(value);
    }
}
