import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiRedoTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {
        '[attr.automation-id]': '"toolbar__redo-button"',
        '(click)': 'editor?.redo()',
    },
})
export class TuiRedoButtonTool extends TuiToolbarTool {
    protected override getDisableState(): boolean {
        return this.editor?.redoDisabled() ?? false;
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.redo;
    }

    protected getHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.redo;
    }
}
