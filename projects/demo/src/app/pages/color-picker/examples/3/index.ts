import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {TuiPalette} from '@taiga-ui/editor';
import {BehaviorSubject} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiButton, TuiDropdown, TuiPalette],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
    protected colors = new Map([
        ['blue', 'var(--tui-status-info)'],
        ['green', 'var(--tui-status-positive)'],
        ['red', 'var(--tui-status-negative)'],
    ]);

    protected color$ = new BehaviorSubject('var(--tui-status-positive)');

    protected updateColor(color: string): void {
        this.color$.next(color);
    }
}
