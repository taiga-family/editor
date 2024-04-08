import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiActiveZoneDirective, TuiLetModule} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiHintModule, TuiHostedDropdownModule} from '@taiga-ui/core';
import {combineLatest, distinctUntilChanged, map} from 'rxjs';

import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import type {TuiEditorOptions} from '../../../tokens/editor-options';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';
import {TuiPaletteComponent} from '../../color-selector/palette/palette.component';

@Component({
    standalone: true,
    selector: 'tui-table-cell-color',
    imports: [
        AsyncPipe,
        TuiLetModule,
        TuiHostedDropdownModule,
        TuiHintModule,
        TuiButtonDirective,
        NgIf,
        TuiPaletteComponent,
        TuiActiveZoneDirective,
    ],
    templateUrl: './table-cell-color.template.html',
    styleUrls: ['../../../../styles/tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableCellColorComponent {
    private readonly options = inject(TUI_EDITOR_OPTIONS);

    @Input()
    public colors: ReadonlyMap<string, string> = this.options.colors;

    protected readonly editor = inject(TuiTiptapEditorService);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);

    protected readonly colorText$ = this.texts$.pipe(
        map(
            texts =>
                (this.editor.isActive('group') && texts.hiliteGroup) ||
                (this.editor.isActive('table') && texts.cellColor) ||
                '',
        ),
    );

    protected readonly isActive$ = combineLatest([
        this.editor.isActive$('table'),
        this.editor.isActive$('group'),
    ]).pipe(map(([table, group]) => table || group));

    protected readonly color$ = this.editor.stateChange$.pipe(
        map(
            () =>
                this.editor.getCellColor() ||
                this.editor.getGroupColor() ||
                this.options.blankColor,
        ),
        distinctUntilChanged(),
    );

    protected get icons(): TuiEditorOptions['icons'] {
        return this.options.icons;
    }

    protected isBlankColor(color: string): boolean {
        return color === this.options.blankColor;
    }

    protected setCellColor(color: string): void {
        if (this.editor.isActive('group')) {
            this.editor.setGroupHilite(color);
        } else if (this.editor.isActive('table')) {
            this.editor.setCellColor(color);
        }
    }
}
