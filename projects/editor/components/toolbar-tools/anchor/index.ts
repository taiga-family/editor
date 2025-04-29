import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiButton, TuiHint} from '@taiga-ui/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TUI_EDITOR_OPTIONS, TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {tuiGetCurrentWordBounds} from '@taiga-ui/editor/utils';

@Component({
    standalone: true,
    selector: 'tui-anchor-tool',
    imports: [AsyncPipe, NgIf, TuiButton, TuiHint, TuiItem],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAnchorTool {
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);

    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });

    protected get a(): boolean {
        return this.editor?.isActive('link') ?? false;
    }

    protected get jumpAnchor(): boolean {
        return this.editor?.isActive('jumpAnchor') ?? false;
    }

    protected onAnchor(): void {
        this.editor?.takeSelectionSnapshot();

        const range = this.editor?.getSelectionSnapshot();
        const editor = this.editor?.getOriginTiptapEditor();
        const {from = range?.anchor} = editor ? tuiGetCurrentWordBounds(editor) : {};

        this.editor?.setAnchor('');
        this.editor?.getOriginTiptapEditor()?.commands.focus((from ?? 0) + 1);
    }
}
