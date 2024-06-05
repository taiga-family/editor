import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {AbstractTuiEditor} from '@tbank/tui-editor/abstract';
import {TuiTiptapEditorService} from '@tbank/tui-editor/directives';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '@tbank/tui-editor/tokens';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: 'tui-details-remove',
    templateUrl: './details-remove.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDetailsRemoveComponent {
    readonly disabled$ = this.editor.stateChange$.pipe(
        map(() => !this.editor.isActive('details')),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
    ) {}

    removeDetails(): void {
        this.editor.removeDetails();
    }
}
