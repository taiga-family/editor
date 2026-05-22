import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    inject,
    signal,
    TemplateRef,
    viewChild,
} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {
    tuiDropdown,
    TuiDropdownDirective,
    TuiDropdownOpen,
    tuiGetViewportWidth,
    TuiInput,
    TuiWithDropdownOpen,
} from '@taiga-ui/core';
import {type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

const MAX_COLS_NUMBER = 15;
const MAX_ROWS_NUMBER = 15;
const MIN_DISTANCE_PX = 70;

@Component({
    selector: 'button[tuiInsertTableTool]',
    imports: [TuiInput],
    template: `
        {{ tuiHint() }}

        <ng-container *tuiDropdown>
            <div class="t-size-selector">
                @for (_ of '-'.repeat(columnsNumber()); track $index; let x = $index) {
                    <div class="t-column">
                        @for (
                            _ of '-'.repeat(rowsNumber());
                            track $index;
                            let y = $index
                        ) {
                            <div
                                class="t-cell"
                                [class.t-cell_hovered]="tableSelectHovered(y, x)"
                                (click)="addTable()"
                                (mouseenter)="updateCurrentSize(y + 1, x + 1, $event)"
                            ></div>
                        }
                    </div>
                }

                <div class="t-description">{{ cols() }}&#215;{{ rows() }}</div>
            </div>
        </ng-container>
    `,
    styles: `
        .t-size-selector {
            display: block;
            padding: 0.75rem;
        }

        .t-cell {
            display: inline-block;
            background-color: var(--tui-background-base);
            inline-size: 1.25rem;
            block-size: 1.25rem;
            border-radius: 0.25rem;
            margin: 0.125rem;
            border: 0.0625rem solid var(--tui-border-normal);
            cursor: pointer;
        }

        .t-cell_hovered {
            background-color: var(--tui-background-base-alt);
        }

        .t-column {
            white-space: nowrap;
        }

        .t-description {
            text-align: center;
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool, TuiDropdownDirective, TuiWithDropdownOpen],
    host: {'[attr.automation-id]': '"toolbar__insert-table-button"'},
})
export class TuiInsertTableButtonTool extends TuiToolbarTool {
    private readonly win = inject(WA_WINDOW);

    protected readonly dropdown = tuiDropdown(null);
    protected readonly open = inject(TuiDropdownOpen).open;
    protected readonly cols = signal(1);
    protected readonly rows = signal(1);
    protected readonly template = viewChild(TemplateRef);

    protected readonly templateEffect = effect(() => {
        this.dropdown.set(this.template());
    });

    protected readonly resetEffect = effect(() => {
        if (this.open()) {
            this.rows.set(1);
            this.cols.set(1);
        }
    });

    protected readonly columnsNumber = computed(() =>
        Math.min(Math.max(3, this.cols() + 1), MAX_COLS_NUMBER),
    );

    protected readonly rowsNumber = computed(() =>
        Math.min(Math.max(3, this.rows() + 1), MAX_ROWS_NUMBER),
    );

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.insertTable;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return this.open() ? '' : (texts?.insertTable ?? '');
    }

    protected addTable(): void {
        this.editor()?.enter(); // @note: clear previous styles

        const prevLine = this.editor()?.state?.selection.anchor;

        // @note: don't use `setHardBreak`,
        // it inherits styles of previous lines
        // required two line after
        this.editor()?.enter();
        this.editor()?.enter();

        this.editor()?.setTextSelection(prevLine ?? 0);
        this.editor()?.insertTable(this.rows(), this.cols());
    }

    protected tableSelectHovered(row: number, col: number): boolean {
        return row < this.rows() && col < this.cols();
    }

    protected updateCurrentSize(rows: number, cols: number, event: MouseEvent): void {
        if (tuiGetViewportWidth(this.win) - event.clientX > MIN_DISTANCE_PX) {
            this.rows.set(rows);
            this.cols.set(cols);
            this.cd.detectChanges();
        }
    }
}
