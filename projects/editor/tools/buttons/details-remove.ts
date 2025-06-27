import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';

import {TuiToolbarButtonTool} from '../tool';

@Component({
    standalone: true,
    selector: 'button[tuiDetailsRemoveTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {
        '(click)': 'editor.unsetDetails()',
    },
})
export class TuiDetailsRemoveButtonTool extends TuiToolbarButtonTool {
    protected override getDisableState(): boolean {
        return !(this.editor?.isActive('details') ?? false);
    }

    protected override getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.detailsRemove;
    }

    protected override getHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.removeDetails;
    }
}
