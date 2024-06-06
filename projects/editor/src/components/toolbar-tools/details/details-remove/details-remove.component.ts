import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiButtonDirective, TuiHint} from '@taiga-ui/core';
import {distinctUntilChanged, map} from 'rxjs';

import {TuiTiptapEditorService} from '../../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-details-remove',
    imports: [AsyncPipe, NgIf, TuiButtonDirective, TuiHint],
    templateUrl: './details-remove.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDetailsRemove {
    protected readonly editor = inject(TuiTiptapEditorService);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);

    protected readonly disabled$ = this.editor.stateChange$.pipe(
        map(() => !this.editor.isActive('details')),
        distinctUntilChanged(),
    );

    protected removeDetails(): void {
        this.editor.removeDetails();
    }
}
