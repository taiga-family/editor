import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TUI_IS_E2E, TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiLink} from '@taiga-ui/core';
import type {TuiEditorToolType} from '@taiga-ui/editor';
import {
    TUI_EDITOR_DEFAULT_EXTENSIONS,
    TUI_EDITOR_DEFAULT_TOOLS,
    TUI_EDITOR_EXTENSIONS,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';

@Component({
    standalone: true,
    selector: 'editor-starter-page',
    imports: [
        NgIf,
        ReactiveFormsModule,
        TuiAddonDoc,
        TuiAutoFocus,
        TuiEditor,
        TuiEditorSocket,
        TuiLink,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: TUI_EDITOR_DEFAULT_EXTENSIONS,
        },
    ],
})
export default class TuiEditorStarter {
    protected readonly template = import('./import/template.md?raw');
    protected readonly component = import('./import/component.md?raw');
    protected readonly exampleOptions = import('./import/tokens/options.md?raw');
    protected readonly exampleFileAttach = import('./import/tokens/file-attach.md?raw');
    protected readonly exampleStyles = import('./import/styles.less.md?raw');
    protected readonly exampleIcons = import('./import/angular.json.md?raw');
    protected readonly isE2E = inject(TUI_IS_E2E);

    protected readonly control = new FormControl(`
        <h2>What is Lorem Ipsum?</h2>
        <p>
            <a
                href="https://www.google.com/search?q=wikipedia&sca_esv=563020551&sxsrf=AB5stBhNcprCNZotMYrhf_8rPUA7JwZ4XQ%3A1693989718615&ei=Vjv4ZKGaJaPMwPAPx5m68Ag&ved=0ahUKEwihnbm7y5WBAxUjJhAIHceMDo4Q4dUDCBA&uact=5&oq=wikipedia&gs_lp=Egxnd3Mtd2l6LXNlcnAiCXdpa2lwZWRpYTIKEAAYigUYsQMYQzIKEAAYgAQYFBiHAjIHEAAYigUYQzILEAAYgAQYsQMYgwEyBxAAGIoFGEMyBxAAGIoFGEMyCBAAGIAEGLEDMgcQABiKBRhDMgUQABiABDIFEAAYgARIqDZQAFjRMXAAeAGQAQCYAYEBoAG4B6oBAzMuNrgBA8gBAPgBAcICBxAjGIoFGCfCAhEQLhiABBixAxiDARjHARjRA8ICCxAuGIAEGLEDGIMBwgINEAAYigUYsQMYgwEYQ8ICExAuGIoFGLEDGIMBGMcBGNEDGEPCAgoQLhiKBRjUAhhDwgINEAAYgAQYsQMYgwEYCsICDRAuGIoFGMcBGNEDGEPiAwQYACBBiAYB&sclient=gws-wiz-serp"
            >
                Lorem Ipsum
            </a>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    `);

    protected exampleText = '';
    protected minHeight = '';
    protected maxHeight = '';

    protected readonly toolsVariants: ReadonlyArray<
        Set<TuiEditorToolType> | readonly TuiEditorToolType[]
    > = [
        Array.from(TUI_EDITOR_DEFAULT_TOOLS),
        [
            TuiEditorTool.Bold,
            TuiEditorTool.Italic,
            TuiEditorTool.Strikethrough,
            TuiEditorTool.HR,
        ],
        [TuiEditorTool.Table, TuiEditorTool.CellColor],
    ];

    protected tools = this.toolsVariants[0];
    protected readOnly = false;
    protected floating = false;
    protected preview = true;

    protected get disabled(): boolean {
        return this.control.disabled;
    }

    protected set disabled(value: boolean) {
        if (value) {
            this.control.disable();
        } else {
            this.control.enable();
        }
    }
}
