import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiButton, TuiHint} from '@taiga-ui/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TUI_EDITOR_OPTIONS, TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';

@Component({
    standalone: true,
    selector: 'tui-clear-tool',
    imports: [AsyncPipe, NgIf, TuiButton, TuiHint, TuiItem],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiClearTool {
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);

    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });
}
