import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    Input,
    OnInit,
    Optional,
} from '@angular/core';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {AbstractTuiEditor} from '@tinkoff/tui-editor/abstract';
import {defaultEditorTools} from '@tinkoff/tui-editor/constants';
import {TuiTiptapEditorService} from '@tinkoff/tui-editor/directives';
import {TuiEditorTool} from '@tinkoff/tui-editor/enums';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '@tinkoff/tui-editor/tokens';
import {combineLatest, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-font-style',
    templateUrl: './font-style.template.html',
    styleUrls: ['../tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiFontStyleComponent implements OnInit {
    private toolsSet = new Set<TuiEditorTool>(defaultEditorTools);

    private localEditor: AbstractTuiEditor | null = null;

    @Input('editor')
    set inputEditor(value: AbstractTuiEditor | null) {
        this.localEditor = value;
        this.initStream();
    }

    @Input()
    set enabledTools(value: Set<TuiEditorTool> | readonly TuiEditorTool[]) {
        this.toolsSet = new Set(value);
    }

    readonly editorTool: typeof TuiEditorTool = TuiEditorTool;

    fontStyleState$: Observable<{
        bold: boolean;
        italic: boolean;
        underline: boolean;
        strike: boolean;
    }> | null = null;

    constructor(
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
        @Optional()
        @Inject(TuiTiptapEditorService)
        readonly injectionEditor: AbstractTuiEditor | null,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
    ) {}

    get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.localEditor;
    }

    ngOnInit(): void {
        this.initStream();
    }

    isEnabled(tool: TuiEditorTool): boolean {
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
