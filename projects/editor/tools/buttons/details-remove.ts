import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiDetailsRemoveTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {
        '(click)': 'editor?.unsetDetails()',
    },
})
export class TuiDetailsRemoveButtonTool extends TuiToolbarTool {
    protected override getDisableState(): boolean {
        return !(this.editor?.isActive('details') ?? false);
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.detailsRemove;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return texts?.removeDetails ?? '';
    }
}
