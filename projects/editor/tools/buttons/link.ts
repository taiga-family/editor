import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';

import {TuiToolbarButtonTool} from '../tool';

@Component({
    standalone: true,
    selector: 'button[tuiLinkTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {
        '[attr.automation-id]': '"toolbar__link-button"',
        '(click)': 'onLink()',
    },
})
export class TuiLinkButtonTool extends TuiToolbarButtonTool {
    protected override getDisableState(): boolean {
        return (
            (this.editor?.isActive('link') ?? false) ||
            (this.editor?.isActive('jumpAnchor') ?? false)
        );
    }

    protected override getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.link;
    }

    protected override getHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.link;
    }

    protected onLink(url?: string): void {
        this.editor?.takeSelectionSnapshot();
        this.editor?.toggleLink(url ?? '');
    }
}
