import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';

import {TuiToolbarButtonTool} from '../tool';

@Component({
    standalone: true,
    selector: 'button[tuiUnorderedListTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {
        '(click)': 'editor?.toggleUnorderedList()',
        '[attr.automation-id]': '"toolbar__un-ordered-list-button"',
    },
})
export class TuiUnorderedListButtonTool extends TuiToolbarButtonTool {
    protected override getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.listUnOrdered;
    }

    protected override getHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.unorderedList;
    }
}
