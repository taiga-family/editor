import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiActiveZone, TuiLet} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown, TuiHint} from '@taiga-ui/core';
import {TuiPaletteModule} from '@taiga-ui/legacy';
import {distinctUntilChanged, map} from 'rxjs';

import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-text-color',
    imports: [
        TuiPaletteModule,
        TuiActiveZone,
        TuiDropdown,
        AsyncPipe,
        TuiLet,
        TuiHint,
        TuiButton,
    ],
    templateUrl: './text-color.template.html',
    styleUrls: ['../../../../styles/tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTextColor {
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly editor = inject(TuiTiptapEditorService);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly foreColorText$ = this.texts$.pipe(map(texts => texts.foreColor));
    protected readonly fontColor$ = this.editor.stateChange$.pipe(
        map(() => {
            const color = this.editor.getFontColor();

            return this.options.blankColor === color ? null : color;
        }),
        distinctUntilChanged(),
    );

    @Input()
    public colors: ReadonlyMap<string, string> = this.options.colors;
}
