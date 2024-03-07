import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiHintModule, TuiHostedDropdownModule} from '@taiga-ui/core';
import {combineLatest, map} from 'rxjs';

import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-list-configs',
    imports: [
        TuiHintModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        AsyncPipe,
        NgIf,
        TuiLetModule,
    ],
    templateUrl: './list-configs.template.html',
    styleUrls: ['../../../../styles/tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiListConfigsComponent {
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly editor = inject(TuiTiptapEditorService);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);

    protected readonly listState$ = combineLatest([
        this.editor.isActive$('orderedList'),
        this.editor.isActive$('bulletList'),
    ]).pipe(
        map(([ordered, unordered]) => ({
            ordered,
            unordered,
        })),
    );

    protected sinkListItem(): void {
        this.editor.sinkListItem();
    }

    protected liftListItem(): void {
        this.editor.liftListItem();
    }
}
