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
    tuiDropdownOpen,
    TuiTextfieldDropdownDirective,
    TuiWithDropdownOpen,
} from '@taiga-ui/core';
import {type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';
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
export class TuiListButtonTool extends TuiToolbarTool {
    protected readonly dropdown = tuiDropdown(null);
    protected readonly open = tuiDropdownOpen();

    @ViewChild(forwardRef(() => TuiTextfieldDropdownDirective), {read: TemplateRef})
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
    }

    protected override isActive(): boolean {
        return (
            this.editor?.isActive('bulletList') ||
            this.editor?.isActive('orderedList') ||
            this.editor?.isActive('taskList') ||
            false
        );
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.listPreview;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return this.open() ? '' : (texts?.list ?? '');
    }
}
