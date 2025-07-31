import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiIndentTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {
        '(click)': 'editor?.sinkListItem()',
        '[attr.automation-id]': '"toolbar_indent-button"',
    },
})
export class TuiIndentButtonTool extends TuiToolbarTool {
    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.indent;
    }

    protected getHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.indent;
    }
}
