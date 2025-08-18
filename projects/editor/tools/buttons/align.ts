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
import {TuiAlignCenterButtonTool} from './align-center';
import {TuiAlignJustifyButtonTool} from './align-justify';
import {TuiAlignLeftButtonTool} from './align-left';
import {TuiAlignRightButtonTool} from './align-right';

@Component({
    standalone: true,
    selector: 'button[tuiAlignTool]',
    imports: [
        TuiAlignCenterButtonTool,
        TuiAlignJustifyButtonTool,
        TuiAlignLeftButtonTool,
        TuiAlignRightButtonTool,
        TuiTextfieldDropdownDirective,
    ],
    template: `
        {{ tuiHint() }}

        <ng-container *tuiTextfieldDropdown>
            <div tuiToolbarDropdownContent>
                <button
                    tuiAlignLeftTool
                    [editor]="editor"
                ></button>
                <button
                    tuiAlignCenterTool
                    [editor]="editor"
                ></button>
                <button
                    tuiAlignRightTool
                    [editor]="editor"
                ></button>
                <button
                    tuiAlignJustifyTool
                    [editor]="editor"
                ></button>
            </div>
        </ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool, TuiDropdownDirective, TuiWithDropdownOpen],
    host: {
        '[attr.automation-id]': '"toolbar__align-button"',
    },
})
export class TuiAlignButtonTool extends TuiToolbarTool {
    protected readonly dropdown = tuiDropdown(null);
    protected readonly open = tuiDropdownOpen();

    @ViewChild(forwardRef(() => TuiTextfieldDropdownDirective), {read: TemplateRef})
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.textAlignPreview;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return this.open() ? '' : (texts?.justify ?? '');
    }
}
