import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiPalette} from '@taiga-ui/editor';
import {TuiHostedDropdownModule} from '@taiga-ui/legacy';
import {BehaviorSubject} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiButtonDirective, TuiHostedDropdownModule, TuiPalette],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
    protected colors = new Map([
        ['blue', 'var(--tui-info-fill)'],
        ['green', 'var(--tui-success-fill)'],
        ['red', 'var(--tui-error-fill)'],
    ]);

    protected color$ = new BehaviorSubject('var(--tui-success-fill)');

    protected updateColor(color: string): void {
        this.color$.next(color);
    }
}
