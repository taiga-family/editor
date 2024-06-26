import {AsyncPipe, NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiButton, TuiDataList, TuiDropdown, TuiHint} from '@taiga-ui/core';
import {distinctUntilChanged, map} from 'rxjs';

import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_CODE_OPTIONS, TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-code',
    imports: [NgForOf, AsyncPipe, TuiButton, TuiHint, TuiDataList, TuiDropdown],
    templateUrl: './code.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCode {
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly editor = inject(TuiTiptapEditorService);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly codeOptionsTexts$ = inject(TUI_EDITOR_CODE_OPTIONS);
    protected readonly hintText$ = this.texts$.pipe(map(texts => texts.code));

    protected readonly insideCode$ = this.editor.stateChange$.pipe(
        map(() => this.editor.isActive('code') || this.editor.isActive('codeBlock')),
        distinctUntilChanged(),
    );

    protected onCode(isCodeBlock: boolean): void {
        if (isCodeBlock) {
            this.editor.toggleCodeBlock();
        } else {
            this.editor.toggleCode();
        }
    }
}
