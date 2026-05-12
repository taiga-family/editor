import {type KeyValue, KeyValuePipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {TuiHint} from '@taiga-ui/core';

@Component({
    selector: 'tui-palette',
    imports: [KeyValuePipe, TuiHint],
    templateUrl: './palette.template.html',
    styleUrl: './palette.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEditorPalette {
    public readonly colors = input<ReadonlyMap<string, string>>(
        new Map<string, string>(),
    );

    public readonly selectedColor = output<string>();

    public originalOrder = (
        _a: KeyValue<string, string>,
        _b: KeyValue<string, string>,
    ): number => 0;
}
