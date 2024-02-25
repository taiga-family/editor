import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiButtonModule, TuiHintModule} from '@taiga-ui/core';

import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-details',
    imports: [AsyncPipe, NgIf, TuiHintModule, TuiButtonModule],
    templateUrl: './details.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDetailsComponent {
    readonly editor = inject(TuiTiptapEditorService);
    readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    readonly options = inject(TUI_EDITOR_OPTIONS);

    setDetails(): void {
        this.editor.setDetails();
    }
}
