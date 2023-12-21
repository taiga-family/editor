import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiButtonModule, TuiHintModule} from '@taiga-ui/core';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {distinctUntilChanged, map, Observable} from 'rxjs';

import {AbstractTuiEditor} from '../../../../abstract/editor-adapter.abstract';
import {TuiTiptapEditorService} from '../../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS, TuiEditorOptions} from '../../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-details-remove',
    imports: [AsyncPipe, NgIf, TuiButtonModule, TuiHintModule],
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
