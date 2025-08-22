import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiEditorSocket} from '@taiga-ui/editor';
import {TuiAccordion, TuiExpand} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    selector: 'tui-content-table',
    imports: [TuiAccordion, TuiEditorSocket, TuiExpand, TuiItem],
    template: `
        <tui-accordion [closeOthers]="false">
            <button [tuiAccordion]="isOpen">HTML</button>
            <tui-expand>
                <ng-container *tuiItem>
                    <tui-editor-socket [content]="value" />
                </ng-container>
            </tui-expand>

            <button [tuiAccordion]="isOpen">Text</button>
            <tui-expand>
                <ng-container *tuiItem>{{ value }}</ng-container>
            </tui-expand>
        </tui-accordion>
    `,
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiContentTable {
    protected readonly isOpen = false;

    @Input()
    public value?: string | null;
}
