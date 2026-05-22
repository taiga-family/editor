import {
    ChangeDetectionStrategy,
    Component,
    effect,
    inject,
    input,
    TemplateRef,
    viewChild,
} from '@angular/core';
import {
    tuiDropdown,
    TuiDropdownDirective,
    TuiDropdownOpen,
    TuiInput,
    TuiWithDropdownOpen,
} from '@taiga-ui/core';
import {
    type TuiEditorOptions,
    TuiEditorTool,
    type TuiEditorToolType,
} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';
import {TuiBoldButtonTool} from './bold';
import {TuiItalicButtonTool} from './italic';
import {TuiStrikeButtonTool} from './strike';
import {TuiUnderlineButtonTool} from './underline';

type Tools = Set<TuiEditorToolType> | readonly TuiEditorToolType[];

@Component({
    selector: 'button[tuiFontStyleTool]',
    imports: [
        TuiBoldButtonTool,
        TuiInput,
        TuiItalicButtonTool,
        TuiStrikeButtonTool,
        TuiUnderlineButtonTool,
    ],
    template: `
        {{ tuiHint() }}

        <ng-container *tuiDropdown>
            <div tuiToolbarDropdownContent>
                @if (isEnabled(editorTool.Bold)) {
                    <button
                        tuiBoldTool
                        [editor]="editor()"
                    >
                        Toggle bold
                    </button>
                }
                @if (isEnabled(editorTool.Italic)) {
                    <button
                        tuiItalicTool
                        [editor]="editor()"
                    >
                        Toggle italic
                    </button>
                }
                @if (isEnabled(editorTool.Underline)) {
                    <button
                        tuiUnderlineTool
                        [editor]="editor()"
                    >
                        Toggle underline
                    </button>
                }
                @if (isEnabled(editorTool.Strikethrough)) {
                    <button
                        tuiStrikeTool
                        [editor]="editor()"
                    >
                        Toggle strike
                    </button>
                }
            </div>
        </ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool, TuiDropdownDirective, TuiWithDropdownOpen],
    host: {'[attr.automation-id]': "'toolbar__font-style-button'"},
})
export class TuiFontStyleButtonTool extends TuiToolbarTool {
    private toolsSet = new Set(this.options.tools);

    protected readonly dropdown = tuiDropdown(null);
    protected readonly open = inject(TuiDropdownOpen).open;
    protected readonly editorTool = TuiEditorTool;

    public readonly enabledTools = input<Tools>();

    protected readonly template = viewChild(TemplateRef);

    protected readonly templateEffect = effect(() => {
        this.dropdown.set(this.template());
    });

    protected readonly enabledToolsEffect = effect(() => {
        const tools = this.enabledTools();

        this.toolsSet = new Set(tools);
    });

    public isEnabled(tool: TuiEditorToolType): boolean {
        return this.toolsSet.has(tool);
    }

    protected override isActive(): boolean {
        return (
            this.editor()?.isActive('bold') ||
            this.editor()?.isActive('italic') ||
            this.editor()?.isActive('underline') ||
            this.editor()?.isActive('strike') ||
            false
        );
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.fontStylePreview;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return this.open() ? '' : (texts?.fontStyle ?? '');
    }
}
