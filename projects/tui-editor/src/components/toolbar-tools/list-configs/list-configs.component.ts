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
    readonly options = inject(TUI_EDITOR_OPTIONS);
    readonly editor = inject(TuiTiptapEditorService);
    readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);

    readonly listState$ = combineLatest([
        this.editor.isActive$('orderedList'),
        this.editor.isActive$('bulletList'),
    ]).pipe(
        map(([ordered, unordered]) => ({
            ordered,
            unordered,
        })),
    );

    sinkListItem(): void {
        this.editor.sinkListItem();
    }

    liftListItem(): void {
        this.editor.liftListItem();
    }
}
