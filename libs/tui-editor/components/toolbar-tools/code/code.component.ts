import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {AbstractTuiEditor} from '@tinkoff/tui-editor/abstract';
import {TuiTiptapEditorService} from '@tinkoff/tui-editor/directives';
import {
    TUI_EDITOR_CODE_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
} from '@tinkoff/tui-editor/tokens';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: 'tui-code',
    templateUrl: './code.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCodeComponent {
    readonly hintText$ = this.texts$.pipe(map(texts => texts.code));

    readonly insideCode$ = this.editor.stateChange$.pipe(
        map(() => this.editor.isActive('code') || this.editor.isActive('codeBlock')),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
        @Inject(TUI_EDITOR_CODE_OPTIONS)
        readonly codeOptionsTexts$: Observable<TuiLanguageEditor['editorCodeOptions']>,
    ) {}

    onCode(isCodeBlock: boolean): void {
        if (isCodeBlock) {
            this.editor.toggleCodeBlock();
        } else {
            this.editor.toggleCode();
        }
    }
}