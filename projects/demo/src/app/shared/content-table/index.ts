import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TUI_IS_E2E, TuiItem} from '@taiga-ui/cdk';
import {TuiEditorSocket} from '@taiga-ui/editor';
import {TuiAccordion, TuiExpand} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    selector: 'tui-content-table',
    imports: [TuiAccordion, TuiEditorSocket, TuiExpand, TuiItem],
    template: `
        <tui-accordion [closeOthers]="false">
            <button [tuiAccordion]="open ?? isE2E">HTML</button>
            <tui-expand>
                <ng-container *tuiItem>
                    <tui-editor-socket [content]="value" />
                </ng-container>
            </tui-expand>

            <button [tuiAccordion]="open ?? isE2E">Text</button>
            <tui-expand>
                <ng-container *tuiItem>{{ value }}</ng-container>
            </tui-expand>
        </tui-accordion>
    `,
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiContentTable {
    protected readonly isE2E = inject(TUI_IS_E2E);

    @Input()
    public open?: boolean;

    @Input()
    public value?: string | null;
}
