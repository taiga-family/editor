import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    Input,
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
import type {TuiEditorOptions, TuiEditorToolType} from '@taiga-ui/editor/common';
import {TuiEditorTool} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';
import {TuiBoldButtonTool} from './bold';
import {TuiItalicButtonTool} from './italic';
import {TuiStrikeButtonTool} from './strike';
import {TuiUnderlineButtonTool} from './underline';

type Tools = Set<TuiEditorToolType> | readonly TuiEditorToolType[];

@Component({
    standalone: true,
    selector: 'button[tuiFontStyleTool]',
    imports: [
        NgIf,
        TuiBoldButtonTool,
        TuiItalicButtonTool,
        TuiStrikeButtonTool,
        TuiTextfieldDropdownDirective,
        TuiUnderlineButtonTool,
    ],
    template: `
        {{ tuiHint() }}

        <ng-container *tuiTextfieldDropdown>
            <div tuiToolbarDropdownContent>
                <button
                    *ngIf="isEnabled(editorTool.Bold)"
                    tuiBoldTool
                    [editor]="editor"
                >
                    Toggle bold
                </button>
                <button
                    *ngIf="isEnabled(editorTool.Italic)"
                    tuiItalicTool
                    [editor]="editor"
                >
                    Toggle italic
                </button>
                <button
                    *ngIf="isEnabled(editorTool.Underline)"
                    tuiUnderlineTool
                    [editor]="editor"
                >
                    Toggle underline
                </button>
                <button
                    *ngIf="isEnabled(editorTool.Strikethrough)"
                    tuiStrikeTool
                    [editor]="editor"
                >
                    Toggle strike
                </button>
            </div>
        </ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool, TuiDropdownDirective, TuiWithDropdownOpen],
    host: {
        '[attr.automation-id]': "'toolbar__font-style-button'",
    },
})
export class TuiFontStyleButtonTool extends TuiToolbarTool {
    private toolsSet = new Set(this.options.tools);
    protected readonly dropdown = tuiDropdown(null);
    protected readonly open = tuiDropdownOpen();
    protected readonly editorTool = TuiEditorTool;

    @Input()
    public set enabledTools(value: Tools) {
        this.toolsSet = new Set(value);
    }

    public isEnabled(tool: TuiEditorToolType): boolean {
        return this.toolsSet.has(tool);
    }

    @ViewChild(forwardRef(() => TuiTextfieldDropdownDirective), {read: TemplateRef})
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.fontStylePreview;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return this.open() ? '' : (texts?.fontStyle ?? '');
    }
}
