import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TuiButtonModule, TuiHintModule, TuiHostedDropdownModule} from '@taiga-ui/core';
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
import {combineLatest, map, Observable} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-font-style',
    imports: [TuiHintModule, TuiButtonModule, NgIf, TuiHostedDropdownModule, AsyncPipe],
    templateUrl: './font-style.template.html',
    styleUrls: ['../tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiFontStyleComponent {
    private toolsSet = new Set<TuiEditorTool>(defaultEditorTools);

    @Input()
    set enabledTools(value: Set<TuiEditorTool> | readonly TuiEditorTool[]) {
        this.toolsSet = new Set(value);
    }

    readonly editorTool: typeof TuiEditorTool = TuiEditorTool;

    readonly fontStyleState$ = combineLatest([
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

    constructor(
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
    ) {}

    isEnabled(tool: TuiEditorTool): boolean {
        return this.toolsSet.has(tool);
    }
}
