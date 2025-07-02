import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {
    tuiDropdown,
    TuiDropdownDirective,
    TuiTextfieldDropdownDirective,
    TuiWithDropdownOpen,
} from '@taiga-ui/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiToolbarButtonTool} from '../tool';
import {TuiIndentButtonTool} from './indent';
import {TuiOrderedListButtonTool} from './ordered-list';
import {TuiOutdentButtonTool} from './outdent';
import {TuiTaskListButtonTool} from './task-list';
import {TuiUnorderedListButtonTool} from './unordered-list';

@Component({
    standalone: true,
    selector: 'button[tuiListTool]',
    imports: [
        TuiIndentButtonTool,
        TuiOrderedListButtonTool,
        TuiOutdentButtonTool,
        TuiTaskListButtonTool,
        TuiTextfieldDropdownDirective,
        TuiUnorderedListButtonTool,
    ],
    template: `
        {{ tuiHint() }}

        <ng-container *tuiTextfieldDropdown>
            <div tuiToolbarDropdownContent>
                <button
                    tuiUnorderedListTool
                    [editor]="editor"
                ></button>
                <button
                    tuiOrderedListTool
                    [editor]="editor"
                ></button>
                <button
                    tuiTaskListTool
                    [editor]="editor"
                ></button>
                <button
                    tuiIndentTool
                    [editor]="editor"
                ></button>
                <button
                    tuiOutdentTool
                    [editor]="editor"
                ></button>
            </div>
        </ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool, TuiDropdownDirective, TuiWithDropdownOpen],
    host: {
        '[attr.automation-id]': '"toolbar__ordering-list-button"',
    },
})
export class TuiListButtonTool extends TuiToolbarButtonTool {
    protected readonly dropdown = tuiDropdown(null);

    @ViewChild(forwardRef(() => TuiTextfieldDropdownDirective), {read: TemplateRef})
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
    }

    protected override getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.listPreview;
    }

    protected override getHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.list;
    }
}
