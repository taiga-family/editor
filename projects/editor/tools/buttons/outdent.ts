import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';

import {TuiToolbarButtonTool} from '../tool';

@Component({
    standalone: true,
    selector: 'button[tuiOutdentTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {
        '(click)': 'editor?.liftListItem()',
        '[attr.automation-id]': '"toolbar_outdent-button"',
    },
})
export class TuiOutdentButtonTool extends TuiToolbarButtonTool {
    protected override getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.outdent;
    }

    protected override getHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.outdent;
    }
}
