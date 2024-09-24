import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiButton, TuiHint} from '@taiga-ui/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TUI_EDITOR_OPTIONS, TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';

@Component({
    standalone: true,
    selector: 'tui-details',
    imports: [AsyncPipe, TuiButton, TuiHint],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDetails {
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);

    @Input('editor')
    public inputEditor: AbstractTuiEditor | null = null;

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.inputEditor;
    }

    protected setDetails(): void {
        this.editor?.setDetails();
    }
}
