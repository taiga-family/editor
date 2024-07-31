import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiButton, TuiDropdown, TuiHint} from '@taiga-ui/core';
import {combineLatest, map} from 'rxjs';

import {TUI_EDITOR_DEFAULT_TOOLS} from '../../../constants/default-editor-tools';
import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import type {TuiEditorToolType} from '../../../types/editor-tool';
import {TuiEditorTool} from '../../../types/editor-tool';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-font-style',
    imports: [AsyncPipe, NgIf, TuiButton, TuiDropdown, TuiHint],
    templateUrl: './font-style.template.html',
    styleUrls: ['../../../../styles/tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiFontStyle {
    private toolsSet = new Set<TuiEditorToolType>(TUI_EDITOR_DEFAULT_TOOLS);

    protected readonly editorTool: typeof TuiEditorTool = TuiEditorTool;
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly editor = inject(TuiTiptapEditorService);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);

    protected readonly fontStyleState$ = combineLatest([
        this.editor.isActive$('bold'),
        this.editor.isActive$('italic'),
        this.editor.isActive$('underline'),
        this.editor.isActive$('strike'),
    ]).pipe(
        map(([bold, italic, underline, strike]) => ({
            bold,
            italic,
            underline,
            strike,
        })),
    );

    @Input()
    public set enabledTools(
        value: Set<TuiEditorToolType> | readonly TuiEditorToolType[],
    ) {
        this.toolsSet = new Set(value);
    }

    protected isEnabled(tool: TuiEditorToolType): boolean {
        return this.toolsSet.has(tool);
    }
}
