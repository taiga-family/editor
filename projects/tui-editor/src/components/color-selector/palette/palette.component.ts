import {KeyValue, KeyValuePipe, NgForOf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {TuiHintModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-palette',
    imports: [KeyValuePipe, NgForOf, TuiHintModule],
    templateUrl: './palette.template.html',
    styleUrls: ['./palette.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPaletteComponent {
    @Input()
    colors: ReadonlyMap<string, string> = new Map<string, string>();

    @Output()
    readonly selectedColor = new EventEmitter<string>();

    originalOrder = (
        _a: KeyValue<string, string>,
        _b: KeyValue<string, string>,
    ): number => 0;
}
