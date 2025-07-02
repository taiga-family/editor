import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';

import {TuiToolbarButtonTool} from '../tool';

@Component({
    standalone: true,
    selector: 'button[tuiRemoveGroupTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {
        '[attr.automation-id]': '"toolbar__group-remove-button"',
        '(click)': 'editor?.removeGroup()',
    },
})
export class TuiRemoveGroupButtonTool extends TuiToolbarButtonTool {
    protected override getDisableState(): boolean {
        return !(this.editor?.isActive('group') ?? false);
    }

    protected override getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.groupRemove;
    }

    protected override getHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.removeGroup;
    }
}
