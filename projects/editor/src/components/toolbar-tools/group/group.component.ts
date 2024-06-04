import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiButtonDirective, TuiHint} from '@taiga-ui/core';
import {distinctUntilChanged, map} from 'rxjs';

import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-editor-group-tool',
    imports: [TuiHint, TuiButtonDirective, AsyncPipe],
    templateUrl: './group.component.html',
    styleUrls: ['../../../../styles/tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEditorGroupToolComponent {
    protected readonly editor = inject(TuiTiptapEditorService);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);

    protected readonly insertGroupText$ = this.texts$.pipe(
        map(texts => texts.insertGroup),
    );

    protected readonly removeGroupText$ = this.texts$.pipe(
        map(texts => texts.removeGroup),
    );

    protected readonly disabled$ = this.editor.stateChange$.pipe(
        map(() => !this.editor.isActive('group')),
        distinctUntilChanged(),
    );

    protected addGroup(): void {
        this.editor.setGroup();
    }

    protected removeGroup(): void {
        this.editor.removeGroup();
    }
}
