import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Output,
} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {TuiRepeatTimesDirective} from '@taiga-ui/cdk';
import {tuiGetViewportWidth} from '@taiga-ui/core';

const MAX_COLS_NUMBER = 15;
const MAX_ROWS_NUMBER = 15;
const MIN_DISTANCE_PX = 70;

@Component({
    standalone: true,
    selector: 'tui-table-size-selector',
    imports: [TuiRepeatTimesDirective],
    templateUrl: './table-size-selector.template.html',
    styleUrls: ['./table-size-selector.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableSizeSelector {
    private readonly win = inject(WINDOW);

    protected tableSize = {
        rows: 1,
        cols: 1,
    };

    @Output()
    public readonly selectSize = new EventEmitter<{cols: number; rows: number}>();

    protected get columnsNumber(): number {
        return Math.min(Math.max(3, this.tableSize.cols + 1), MAX_COLS_NUMBER);
    }

    protected get rowsNumber(): number {
        return Math.min(Math.max(3, this.tableSize.rows + 1), MAX_ROWS_NUMBER);
    }

    protected tableSelectHovered(x: number, y: number): boolean {
        return x < this.tableSize.rows && y < this.tableSize.cols;
    }

    protected updateCurrentSize(rows: number, cols: number, event: MouseEvent): void {
        if (tuiGetViewportWidth(this.win) - event.clientX > MIN_DISTANCE_PX) {
            this.tableSize = {rows, cols};
        }
    }

    protected select(): void {
        this.selectSize.emit(this.tableSize);
    }
}
