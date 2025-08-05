import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n';
import {distinctUntilChanged, map} from 'rxjs';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

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
export class TuiTableMergeCellButtonTool extends TuiToolbarTool implements OnInit {
    protected readonly canMergeCells? = signal<boolean>(false);

    public ngOnInit(): void {
        this.editor?.valueChange$
            .pipe(
                map(() => this.editor?.canMergeCells() ?? false),
                distinctUntilChanged(),
                takeUntilDestroyed(this.destroy$),
            )
            .subscribe((e) => this.canMergeCells?.set(e));
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
        return (this.canMergeCells?.() ? texts?.mergeCells : texts?.splitCells) ?? '';
    }
}
