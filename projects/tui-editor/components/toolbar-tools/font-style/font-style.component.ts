import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {AbstractTuiEditor} from '../../../abstract';
import {defaultEditorTools} from '../../../constants';
import {TuiTiptapEditorService} from '../../../directives';
import {TuiEditorTool} from '../../../enums';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '../../../tokens';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-font-style',
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

    readonly TuiEditorTool: typeof TuiEditorTool = TuiEditorTool;

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
