import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';
import {distinctUntilChanged, map} from 'rxjs';

import {TuiToolbarButtonTool} from '../tool';

@Component({
    standalone: true,
    selector: 'button[tuiTableMergeCellTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {
        '(click)': 'canMergeCells?.() ? editor?.mergeCells() : editor?.splitCell()',
    },
})
export class TuiTableMergeCellButtonTool extends TuiToolbarButtonTool implements OnInit {
    protected readonly canMergeCells = signal<boolean>(false);

    public ngOnInit(): void {
        this.editor?.stateChange$
            .pipe(
                map(() => this.editor?.canMergeCells() ?? false),
                distinctUntilChanged(),
                takeUntilDestroyed(this.destroy$),
            )
            .subscribe((e) => this.canMergeCells.set(e));
    }

    protected override getDisableState(): boolean {
        return (
            !(this.editor?.canMergeCells?.() ?? false) &&
            !(this.editor?.canSplitCells() ?? false)
        );
    }

    protected override getIcon(icons: TuiEditorOptions['icons']): string {
        return this.canMergeCells?.() ? icons.tableCellMerge : icons.tableCellSplit;
    }

    protected override getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return (this.canMergeCells?.() ? texts?.mergeCells : texts?.splitCells) ?? '';
    }
}
