import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

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
export class TuiUndoButtonTool extends TuiToolbarTool {
    protected override getDisableState(): boolean {
        return this.editor?.undoDisabled() ?? false;
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.undo;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return texts?.undo ?? '';
    }
}
