import {NgForOf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    inject,
    Input,
    Output,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

import {TuiPickerService} from '../../../services/picker.service';

@Component({
    standalone: true,
    selector: 'tui-linear-multi-picker',
    imports: [NgForOf],
    templateUrl: './linear-multi-picker.template.html',
    styleUrls: ['./linear-multi-picker.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiPickerService],
})
export class TuiLinearMultiPicker {
    protected index = NaN;

    @Input()
    public value = [0, 1];

    @Output()
    public readonly valueChange = new EventEmitter<number[]>();

    @Output()
    public readonly indexChange = new EventEmitter<number>();

    constructor() {
        inject(TuiPickerService)
            .pipe(takeUntilDestroyed())
            .subscribe(([x]) => this.onPicker(x));
    }

    @HostListener('document:mouseup')
    protected onMouseUp(): void {
        this.index = NaN;
    }

    protected onMouseDown(index: number): void {
        this.updateIndex(index);
    }

    protected onClick(index: number): void {
        if (this.value.length > 2) {
            this.updateValue(this.value.filter((_, i) => i !== index));
        }
    }

    private onPicker(x: number): void {
        if (Number.isNaN(this.index)) {
            this.updateIndex(this.value.length);
            this.value = [...this.value, 0];
        }

        if (this.value.some((item, index) => item === x && index !== this.index)) {
            return;
        }

        this.updateValue(
            this.value.map((item, index) => (index === this.index ? x : item)),
        );
    }

    private updateIndex(index: number): void {
        this.index = index;
        this.indexChange.emit(index);
    }

    private updateValue(value: number[]): void {
        this.value = value;
        this.valueChange.emit(value);
    }
}
