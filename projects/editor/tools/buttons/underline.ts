import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiUnderlineTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {
        '(click)': 'editor?.toggleUnderline()',
    },
})
export class TuiUnderlineButtonTool extends TuiToolbarTool {
    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.fontStyleUnderline;
    }

    protected getHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.underline;
    }
}
