import {AsyncPipe, NgIf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiButton, TuiDropdown, TuiHint} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {combineLatest, map, of} from 'rxjs';

import type {AbstractTuiEditor} from '../../../abstract/editor-adapter.abstract';
import {TUI_EDITOR_DEFAULT_TOOLS} from '../../../constants/default-editor-tools';
import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';
import type {TuiEditorToolType} from '../../../types/editor-tool';
import {TuiEditorTool} from '../../../types/editor-tool';

@Component({
    standalone: true,
    selector: 'tui-font-style',
    imports: [AsyncPipe, NgIf, TuiButton, TuiDropdown, TuiHint],
    templateUrl: './font-style.template.html',
    styleUrls: ['../../../../styles/tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiFontStyle implements OnInit {
    private toolsSet = new Set<TuiEditorToolType>(TUI_EDITOR_DEFAULT_TOOLS);
    private localEditor: AbstractTuiEditor | null = null;
    protected readonly editorTool: typeof TuiEditorTool = TuiEditorTool;
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected fontStyleState$: Observable<{
        bold: boolean;
        italic: boolean;
        underline: boolean;
        strike: boolean;
    }> | null = null;

    @Input('editor')
    public set inputEditor(value: AbstractTuiEditor | null) {
        this.localEditor = value;
        this.initStream();
    }

    @Input()
    public set enabledTools(
        value: Set<TuiEditorToolType> | readonly TuiEditorToolType[],
    ) {
        this.toolsSet = new Set(value);
    }

    public get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.localEditor;
    }

    public ngOnInit(): void {
        this.initStream();
    }

    public isEnabled(tool: TuiEditorToolType): boolean {
        return this.toolsSet.has(tool);
    }

    private initStream(): void {
        this.fontStyleState$ = combineLatest([
            this.editor?.isActive$('bold') ?? of(false),
            this.editor?.isActive$('italic') ?? of(false),
            this.editor?.isActive$('underline') ?? of(false),
            this.editor?.isActive$('strike') ?? of(false),
        ]).pipe(
            map(([bold, italic, underline, strike]) => ({
                bold,
                italic,
                underline,
                strike,
            })),
        );
    }
}
