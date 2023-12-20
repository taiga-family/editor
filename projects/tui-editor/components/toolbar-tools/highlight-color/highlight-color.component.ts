import {AsyncPipe, NgIf} from '@angular/common';
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
    selector: 'tui-highlight-color',
    imports: [
        TuiHostedDropdownModule,
        AsyncPipe,
        TuiLetModule,
        TuiButtonModule,
        TuiHintModule,
        NgIf,
        TuiActiveZoneDirective,
        TuiPaletteComponent,
    ],
    templateUrl: './highlight-color.template.html',
    styleUrls: ['../tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiHighlightColorComponent {
    @Input()
    colors: ReadonlyMap<string, string> = this.options.colors;

    readonly backgroundColor$ = this.editor.stateChange$.pipe(
        map(() => this.editor.getBackgroundColor() || this.options.blankColor),
        distinctUntilChanged(),
    );

    readonly backColorText$ = this.texts$.pipe(map(texts => texts.backColor));

    constructor(
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
    ) {}

    isBlankColor(color: string): boolean {
        return color === this.options.blankColor;
    }
}
