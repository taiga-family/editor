import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiTableMergeCellTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {'(click)': 'canMergeCells?.() ? editor?.mergeCells() : editor?.splitCell()'},
})
export class TuiTableMergeCellButtonTool extends TuiToolbarTool {
    protected readonly canMergeCells? = signal<boolean>(false);

    protected override updateSignals(): void {
        this.canMergeCells?.set(this.editor?.canMergeCells() ?? false);

        super.updateSignals();
    }

    protected override getDisableState(): boolean {
        return (
            !(this.editor?.canMergeCells() ?? false) &&
            !(this.editor?.canSplitCells() ?? false)
        );
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return this.canMergeCells?.() ? icons.tableCellMerge : icons.tableCellSplit;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return this.canMergeCells?.()
            ? (texts?.mergeCells ?? '')
            : (texts?.splitCells ?? '');
    }
}
