import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiHintModule, TuiHostedDropdownModule} from '@taiga-ui/core';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {AbstractTuiEditor} from '@tinkoff/tui-editor/abstract';
import {TuiTiptapEditorService} from '@tinkoff/tui-editor/directives';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '@tinkoff/tui-editor/tokens';
import {combineLatest, map, Observable} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-align-content',
    imports: [
        TuiHintModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        AsyncPipe,
        TuiLetModule,
        NgIf,
    ],
    templateUrl: './align-content.template.html',
    styleUrls: ['../tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAlignContentComponent {
    readonly alignState$ = combineLatest([
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

    constructor(
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
    ) {}
}
