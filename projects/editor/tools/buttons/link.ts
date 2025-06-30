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
        '[disabled]': 'a || jumpAnchor',
        '(click)': 'onLink()',
    },
})
export class TuiLinkButtonTool extends TuiToolbarButtonTool {
    protected get a(): boolean {
        return this.editor?.isActive('link') ?? false;
    }

    protected get jumpAnchor(): boolean {
        return this.editor?.isActive('jumpAnchor') ?? false;
    }

    protected override ensureIcon(icons: TuiEditorOptions['icons']): string {
        return icons.link;
    }

    protected override ensureHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.link;
    }

    protected onLink(url?: string): void {
        this.editor?.takeSelectionSnapshot();
        this.editor?.toggleLink(url ?? '');
    }
}
