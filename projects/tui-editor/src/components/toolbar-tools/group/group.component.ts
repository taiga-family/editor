import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiButtonModule, TuiHintModule} from '@taiga-ui/core';
import {distinctUntilChanged, map} from 'rxjs';

import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-editor-group-tool',
    imports: [TuiHintModule, TuiButtonModule, AsyncPipe],
    templateUrl: './group.component.html',
    styleUrls: ['../../../../styles/tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEditorGroupToolComponent {
    readonly editor = inject(TuiTiptapEditorService);
    readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    readonly options = inject(TUI_EDITOR_OPTIONS);

    readonly insertGroupText$ = this.texts$.pipe(map(texts => texts.insertGroup));
    readonly removeGroupText$ = this.texts$.pipe(map(texts => texts.removeGroup));

    readonly disabled$ = this.editor.stateChange$.pipe(
        map(() => !this.editor.isActive('group')),
        distinctUntilChanged(),
    );

    addGroup(): void {
        this.editor.setGroup();
    }

    removeGroup(): void {
        this.editor.removeGroup();
    }
}
