import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiActiveZone, TuiLet} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown, TuiHint} from '@taiga-ui/core';
import {distinctUntilChanged, map} from 'rxjs';

import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import type {TuiEditorOptions} from '../../../tokens/editor-options';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';
import {TuiPalette} from '../../color-selector/palette/palette.component';

@Component({
    standalone: true,
    selector: 'tui-text-color',
    imports: [
        TuiPalette,
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
    private readonly options = inject(TUI_EDITOR_OPTIONS);

    protected readonly editor = inject(TuiTiptapEditorService);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly fontColor$ = this.editor.stateChange$.pipe(
        map(() => this.editor.getFontColor() || this.options.blankColor),
        distinctUntilChanged(),
    );

    protected readonly foreColorText$ = this.texts$.pipe(map(texts => texts.foreColor));

    @Input()
    public colors: ReadonlyMap<string, string> = this.options.colors;

    protected get icons(): TuiEditorOptions['icons'] {
        return this.options.icons;
    }
}
