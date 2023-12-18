import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiButtonModule, TuiHostedDropdownModule} from '@taiga-ui/core';
import {TuiPaletteModule} from '@tinkoff/tui-editor';
import {BehaviorSubject} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-color-picker-example-3',
    imports: [TuiPaletteModule, AsyncPipe, TuiButtonModule, TuiHostedDropdownModule],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiColorPickerExample3 {
    colors = new Map([
        ['blue', 'var(--tui-info-fill)'],
        ['green', 'var(--tui-success-fill)'],
        ['red', 'var(--tui-error-fill)'],
    ]);

    color$ = new BehaviorSubject('var(--tui-success-fill)');

    updateColor(color: string): void {
        this.color$.next(color);
    }
}
