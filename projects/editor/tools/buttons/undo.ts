import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';

import {TuiToolbarButtonTool} from '../tool';

@Component({
    standalone: true,
    selector: 'button[tuiUndoTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {
        '[attr.automation-id]': '"toolbar__undo-button"',
        '(click)': 'editor?.undo()',
    },
})
export class TuiUndoButtonTool extends TuiToolbarButtonTool {
    protected override getDisableState(): boolean {
        return this.editor?.undoDisabled() ?? false;
    }

    protected override getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.undo;
    }

    protected override getHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.undo;
    }
}
