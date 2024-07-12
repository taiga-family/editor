import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiActiveZone, TuiLet} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown, TuiHint} from '@taiga-ui/core';
import {TuiPaletteModule} from '@taiga-ui/legacy';
import {distinctUntilChanged, map} from 'rxjs';

import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import type {TuiEditorOptions} from '../../../tokens/editor-options';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-highlight-color',
    imports: [
        AsyncPipe,
        NgIf,
        TuiActiveZone,
        TuiButton,
        TuiDropdown,
        TuiHint,
        TuiLet,
        TuiPaletteModule,
    ],
    templateUrl: './highlight-color.template.html',
    styleUrls: ['../../../../styles/tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiHighlightColor {
    private readonly options = inject(TUI_EDITOR_OPTIONS);

    protected readonly editor = inject(TuiTiptapEditorService);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly backgroundColor$ = this.editor.stateChange$.pipe(
        map(() => this.editor.getBackgroundColor() || this.options.blankColor),
        distinctUntilChanged(),
    );

    protected readonly backColorText$ = this.texts$.pipe(map((texts) => texts.backColor));

    @Input()
    public colors: ReadonlyMap<string, string> = this.options.colors;

    protected get icons(): TuiEditorOptions['icons'] {
        return this.options.icons;
    }

    protected isBlankColor(color: string): boolean {
        return color === this.options.blankColor;
    }
}
