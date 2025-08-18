import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

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
export class TuiOutdentButtonTool extends TuiToolbarTool {
    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.outdent;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return texts?.outdent ?? '';
    }
}
