import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TUI_EDITOR_OPTIONS, TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {TuiDetailsRemoveButtonTool} from '@taiga-ui/editor/tools';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

/**
 * @deprecated use {@link TuiDetailsRemoveButtonTool}
 */
@Component({
    standalone: true,
    selector: 'tui-details-remove,tui-details-remove-tool',
    imports: [TuiDetailsRemoveButtonTool],
    template: `
        <button
            tuiDetailsRemoveTool
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDetailsRemoveTool implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected disabled$: Observable<boolean> | null = null;

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
        this.disabled$ =
            this.editor?.isActive$('details').pipe(map((isActive) => !isActive)) ?? null;
    }
}

/**
 * @deprecated use {@link TuiDetailsAddButtonTool}
 */
export const TuiDetailsRemove = TuiDetailsRemoveTool;
