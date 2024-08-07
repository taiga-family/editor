import {AsyncPipe, NgIf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiButton, TuiHint} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs';

import type {AbstractTuiEditor} from '../../../abstract/editor-adapter.abstract';
import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-table-merge-cells',
    imports: [AsyncPipe, NgIf, TuiButton, TuiHint, TuiLet],
    templateUrl: './table-merge-cells.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableMergeCells implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected canMergeCells$: Observable<boolean> | null = null;
    protected canSplitCells$: Observable<boolean> | null = null;

    @Input('editor')
    public set inputEditor(value: AbstractTuiEditor | null) {
        this.localEditor = value;
        this.initStream();
    }

    public ngOnInit(): void {
        this.initStream();
    }

    public mergeCells(): void {
        this.editor?.mergeCells();
    }

    public splitCell(): void {
        this.editor?.splitCell();
    }

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.localEditor;
    }

    private initStream(): void {
        this.canMergeCells$ =
            this.editor?.stateChange$.pipe(
                map(() => this.editor?.canMergeCells() ?? false),
                distinctUntilChanged(),
            ) ?? null;

        this.canSplitCells$ =
            this.editor?.stateChange$.pipe(
                map(() => this.editor?.canSplitCells() ?? false),
                distinctUntilChanged(),
            ) ?? null;
    }
}
