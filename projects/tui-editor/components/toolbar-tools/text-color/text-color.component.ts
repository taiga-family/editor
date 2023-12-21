import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TuiActiveZoneDirective, TuiLetModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiHintModule, TuiHostedDropdownModule} from '@taiga-ui/core';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {AbstractTuiEditor} from '@tinkoff/tui-editor/abstract';
import {TuiPaletteComponent} from '@tinkoff/tui-editor/components/color-selector';
import {TuiTiptapEditorService} from '@tinkoff/tui-editor/directives';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '@tinkoff/tui-editor/tokens';
import {distinctUntilChanged, map, Observable} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-text-color',
    imports: [
        TuiPaletteComponent,
        TuiActiveZoneDirective,
        TuiHostedDropdownModule,
        AsyncPipe,
        TuiLetModule,
        TuiHintModule,
        TuiButtonModule,
    ],
    templateUrl: './text-color.template.html',
    styleUrls: ['../tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTextColorComponent {
    @Input()
    colors: ReadonlyMap<string, string> = this.options.colors;

    readonly fontColor$ = this.editor.stateChange$.pipe(
        map(() => this.editor.getFontColor() || this.options.blankColor),
        distinctUntilChanged(),
    );

    readonly foreColorText$ = this.texts$.pipe(map(texts => texts.foreColor));

    constructor(
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
    ) {}
}
