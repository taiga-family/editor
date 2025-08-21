import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    inject,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    tuiDropdown,
    TuiDropdownDirective,
    tuiDropdownOpen,
    tuiGetViewportWidth,
    TuiTextfieldDropdownDirective,
    TuiWithDropdownOpen,
} from '@taiga-ui/core';
import {type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

const MAX_COLS_NUMBER = 15;
const MAX_ROWS_NUMBER = 15;
const MIN_DISTANCE_PX = 70;

@Component({
    standalone: true,
    selector: 'button[tuiInsertTableTool]',
    imports: [TuiRepeatTimes, TuiTextfieldDropdownDirective],
    template: `
        {{ tuiHint() }}

        <ng-container *tuiTextfieldDropdown>
            <div class="t-size-selector">
                <div
                    *tuiRepeatTimes="let x of columnsNumber"
                    class="t-column"
                >
                    <div
                        *tuiRepeatTimes="let y of rowsNumber"
                        class="t-cell"
                        [class.t-cell_hovered]="tableSelectHovered(y, x)"
                        (click)="addTable(tableSize)"
                        (mouseenter)="updateCurrentSize(y + 1, x + 1, $event)"
                    ></div>
                </div>
                <div class="t-description">
                    {{ tableSize.cols }}&#215;{{ tableSize.rows }}
                </div>
            </div>
        </ng-container>
    `,
    styles: [
        `
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
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool, TuiDropdownDirective, TuiWithDropdownOpen],
    host: {
        '[attr.automation-id]': '"toolbar__insert-table-button"',
    },
})
export class TuiInsertTableButtonTool extends TuiToolbarTool {
    private readonly win = inject(WINDOW);
    protected readonly dropdown = tuiDropdown(null);
    protected readonly open = tuiDropdownOpen();

    protected tableSize = {
        rows: 1,
        cols: 1,
    };

    @ViewChild(forwardRef(() => TuiTextfieldDropdownDirective), {read: TemplateRef})
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
    }

    protected get columnsNumber(): number {
        return Math.min(Math.max(3, this.tableSize.cols + 1), MAX_COLS_NUMBER);
    }

    protected get rowsNumber(): number {
        return Math.min(Math.max(3, this.tableSize.rows + 1), MAX_ROWS_NUMBER);
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.insertTable;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return this.open() ? '' : (texts?.insertTable ?? '');
    }

    protected addTable({rows, cols}: {cols: number; rows: number}): void {
        this.editor?.enter(); // @note: clear previous styles

        const prevLine = this.editor?.state?.selection.anchor;

        // @note: don't use `setHardBreak`,
        // it inherits styles of previous lines
        // required two line after
        this.editor?.enter();
        this.editor?.enter();

        this.editor?.setTextSelection(prevLine ?? 0);
        this.editor?.insertTable(rows, cols);
    }

    protected tableSelectHovered(x: number, y: number): boolean {
        return x < this.tableSize.rows && y < this.tableSize.cols;
    }

    protected updateCurrentSize(rows: number, cols: number, event: MouseEvent): void {
        if (tuiGetViewportWidth(this.win) - event.clientX > MIN_DISTANCE_PX) {
            this.tableSize = {rows, cols};
            this.cd.detectChanges();
        }
    }
}
