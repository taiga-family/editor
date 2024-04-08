import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiActiveZoneDirective, TuiLetModule} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiHintModule, TuiHostedDropdownModule} from '@taiga-ui/core';
import {distinctUntilChanged, map} from 'rxjs';

import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import type {TuiEditorOptions} from '../../../tokens/editor-options';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';
import {TuiPaletteComponent} from '../../color-selector/palette/palette.component';

@Component({
    standalone: true,
    selector: 'tui-highlight-color',
    imports: [
        TuiHostedDropdownModule,
        AsyncPipe,
        TuiLetModule,
        TuiButtonDirective,
        TuiHintModule,
        NgIf,
        TuiActiveZoneDirective,
        TuiPaletteComponent,
    ],
    templateUrl: './highlight-color.template.html',
    styleUrls: ['../../../../styles/tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiHighlightColorComponent {
    private readonly options = inject(TUI_EDITOR_OPTIONS);

    @Input()
    public colors: ReadonlyMap<string, string> = this.options.colors;

    protected readonly editor = inject(TuiTiptapEditorService);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);

    protected readonly backgroundColor$ = this.editor.stateChange$.pipe(
        map(() => this.editor.getBackgroundColor() || this.options.blankColor),
        distinctUntilChanged(),
    );

    protected readonly backColorText$ = this.texts$.pipe(map(texts => texts.backColor));

    protected get icons(): TuiEditorOptions['icons'] {
        return this.options.icons;
    }

    protected isBlankColor(color: string): boolean {
        return color === this.options.blankColor;
    }
}
