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
    selector: 'tui-align-content',
    imports: [
        TuiHint,
        TuiButtonDirective,
        TuiHostedDropdownModule,
        AsyncPipe,
        TuiLetDirective,
        NgIf,
    ],
    templateUrl: './align-content.template.html',
    styleUrls: ['../../../../styles/tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAlignContentComponent {
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly editor = inject(TuiTiptapEditorService);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);

    protected readonly alignState$ = combineLatest([
        this.editor.isActive$({textAlign: 'left'}),
        this.editor.isActive$({textAlign: 'right'}),
        this.editor.isActive$({textAlign: 'center'}),
        this.editor.isActive$({textAlign: 'justify'}),
    ]).pipe(
        map(([left, right, center, justify]) => ({
            left,
            right,
            center,
            justify,
        })),
    );
}
