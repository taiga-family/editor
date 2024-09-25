import {AsyncPipe, NgIf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiButton, TuiDropdown, TuiHint} from '@taiga-ui/core';
import type {AbstractTuiEditor, TuiEditorToolType} from '@taiga-ui/editor/common';
import {
    TUI_EDITOR_DEFAULT_TOOLS,
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorTool,
} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import type {Observable} from 'rxjs';
import {combineLatest, map, of} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-font-style',
    imports: [AsyncPipe, NgIf, TuiButton, TuiDropdown, TuiHint],
    templateUrl: './index.html',
    styleUrls: ['../../../styles/tools-common.less'],
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
