import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'tui-color-picker-example-3',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiColorPickerExample3 {
    colors = new Map([
        ['red', 'var(--tui-error-fill)'],
        ['green', 'var(--tui-success-fill)'],
        ['blue', 'var(--tui-info-fill)'],
    ]);

    color$ = new BehaviorSubject('var(--tui-success-fill)');

    updateColor(color: string): void {
        this.color$.next(color);
    }
}
