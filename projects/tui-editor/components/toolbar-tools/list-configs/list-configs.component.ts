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
    styleUrls: ['../tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiListConfigsComponent {
    readonly listState$ = combineLatest([
        this.editor.isActive$('orderedList'),
        this.editor.isActive$('bulletList'),
    ]).pipe(
        map(([ordered, unordered]) => ({
            ordered,
            unordered,
        })),
    );

    constructor(
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
    ) {}

    sinkListItem(): void {
        this.editor.sinkListItem();
    }

    liftListItem(): void {
        this.editor.liftListItem();
    }
}
