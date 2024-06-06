import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiLetDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiHint, TuiHostedDropdownModule} from '@taiga-ui/core';
import {combineLatest, map} from 'rxjs';

import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-list-configs',
    imports: [
        TuiHint,
        TuiButtonDirective,
        TuiHostedDropdownModule,
        AsyncPipe,
        NgIf,
        TuiLetDirective,
    ],
    templateUrl: './list-configs.template.html',
    styleUrls: ['../../../../styles/tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiListConfigs {
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly editor = inject(TuiTiptapEditorService);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);

    protected readonly listState$ = combineLatest([
        this.editor.isActive$('orderedList'),
        this.editor.isActive$('bulletList'),
        this.editor.isActive$('taskList'),
    ]).pipe(
        map(([ordered, unordered, tasked]) => ({
            ordered,
            unordered,
            tasked,
        })),
    );

    protected sinkListItem(): void {
        this.editor.sinkListItem();
    }

    protected liftListItem(): void {
        this.editor.liftListItem();
    }
}
