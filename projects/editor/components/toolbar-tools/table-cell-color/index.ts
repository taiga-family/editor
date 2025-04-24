import {AsyncPipe, NgIf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown, TuiHint} from '@taiga-ui/core';
import type {AbstractTuiEditor, TuiEditorOptions} from '@taiga-ui/editor/common';
import {TUI_EDITOR_OPTIONS, TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {TuiPaletteModule} from '@taiga-ui/legacy';
import type {Observable} from 'rxjs';
import {combineLatest, distinctUntilChanged, map, of} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-table-cell-color',
    imports: [AsyncPipe, NgIf, TuiButton, TuiDropdown, TuiHint, TuiPaletteModule],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableCellColor implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;

    private readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected colorText$: Observable<string> | null = null;
    protected isActive$: Observable<boolean> | null = null;
    protected color$: Observable<string> | null = null;

    @Input()
    public colors: ReadonlyMap<string, string> = this.options.colors;

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

    protected get icons(): TuiEditorOptions['icons'] {
        return this.options.icons;
    }

    protected isBlankColor(color: string): boolean {
        return color === this.options.blankColor;
    }

    protected setCellColor(color: string): void {
        if (this.editor?.isActive('group')) {
            this.editor.setGroupHilite(color);
        } else if (this.editor?.isActive('table')) {
            this.editor.setCellColor(color);
        }
    }

    private initStream(): void {
        this.colorText$ = this.texts$.pipe(
            map(
                (texts) =>
                    (this.editor?.isActive('group') && texts.hiliteGroup) ||
                    (this.editor?.isActive('table') && texts.cellColor) ||
                    '',
            ),
        );

        this.isActive$ = combineLatest([
            this.editor?.isActive$('table') ?? of(false),
            this.editor?.isActive$('group') ?? of(false),
        ]).pipe(map(([table, group]) => table || group));

        this.color$ =
            this.editor?.stateChange$.pipe(
                map(
                    () =>
                        this.editor?.getCellColor() ??
                        this.editor?.getGroupColor() ??
                        this.options.blankColor,
                ),
                distinctUntilChanged(),
            ) ?? null;
    }
}
