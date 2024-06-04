import type {KeyValue} from '@angular/common';
import {KeyValuePipe, NgForOf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {TuiHint} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-palette',
    imports: [KeyValuePipe, NgForOf, TuiHint],
    templateUrl: './palette.template.html',
    styleUrls: ['./palette.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPaletteComponent {
    @Input()
    public colors: ReadonlyMap<string, string> = new Map<string, string>();

    @Output()
    public readonly selectedColor = new EventEmitter<string>();

    protected originalOrder = (
        _a: KeyValue<string, string>,
        _b: KeyValue<string, string>,
    ): number => 0;
}
