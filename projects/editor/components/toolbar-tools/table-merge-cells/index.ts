import {AsyncPipe} from '@angular/common';
import type {OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    Input,
    signal,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TUI_IS_MOBILE, TuiItem} from '@taiga-ui/cdk';
import {TuiButton, TuiHint} from '@taiga-ui/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TUI_EDITOR_OPTIONS, TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {distinctUntilChanged, map} from 'rxjs';

@Component({
    standalone: true,
    // TODO: deprecate tui-table-merge-cells
    selector: 'tui-table-merge-cells,tui-table-merge-cells-tool',
    imports: [AsyncPipe, TuiButton, TuiHint, TuiItem],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableMergeCellsTool implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;
    private readonly destroyRef = inject(DestroyRef);
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly canMergeCells = signal(false);
    protected readonly canSplitCells = signal(false);

    @Input('editor')
    public set inputEditor(value: AbstractTuiEditor | null) {
        this.localEditor = value;
        this.initStream();
    }

    public ngOnInit(): void {
        this.initStream();
    }

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.localEditor;
    }

    private initStream(): void {
        this.editor?.stateChange$
            .pipe(
                map(() => this.editor?.canMergeCells() ?? false),
                distinctUntilChanged(),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe((e) => this.canMergeCells.set(e));

        this.editor?.stateChange$
            .pipe(
                map(() => this.editor?.canSplitCells() ?? false),
                distinctUntilChanged(),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe((e) => this.canSplitCells.set(e));
    }
}

/**
 * @deprecated use {@link TuiTableMergeCellsTool}
 */
export const TuiTableMergeCells = TuiTableMergeCellsTool;
