import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiActiveZoneDirective, TuiLetModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiHintModule, TuiHostedDropdownModule} from '@taiga-ui/core';
import {distinctUntilChanged, map} from 'rxjs';

import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';
import {TuiPaletteComponent} from '../../color-selector/palette/palette.component';

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
    styleUrls: ['../../../../styles/tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTextColorComponent {
    protected readonly options = inject(TUI_EDITOR_OPTIONS);

    @Input()
    colors: ReadonlyMap<string, string> = this.options.colors;

    readonly editor = inject(TuiTiptapEditorService);
    readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);

    readonly fontColor$ = this.editor.stateChange$.pipe(
        map(() => this.editor.getFontColor() || this.options.blankColor),
        distinctUntilChanged(),
    );

    readonly foreColorText$ = this.texts$.pipe(map(texts => texts.foreColor));
}
