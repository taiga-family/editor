import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';
import {
    defaultEditorExtensions,
    defaultEditorTools,
    TUI_EDITOR_EXTENSIONS,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

@Component({
    selector: 'editor-starter-page',
    templateUrl: './editor-starter.template.html',
    styleUrls: ['./editor-starter.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export class TuiEditorStarterPageComponent {
    readonly exampleModule = import('./import/import-module.md?raw');
    readonly exampleHtml = import('./import/insert-template.md?raw');
    readonly exampleComponent = import('./import/component.md?raw');
    readonly exampleEditorOptionsToken = import('./import/editor-options-token.md?raw');
    readonly exampleStyles = import('./import/styles.less.md?raw');
    readonly exampleIcons = import('./import/angular.json.md?raw');

    readonly control = new FormControl();

    exampleText = '';
    minHeight: number | null = null;
    maxHeight: number | null = null;
    readOnly = false;
    focusable = true;
    pseudoInvalid: boolean | null = null;
    pseudoFocused: boolean | null = null;
    pseudoHovered: boolean | null = null;

    readonly toolsVariants: readonly TuiEditorTool[][] = [
        defaultEditorTools,
        [
            TuiEditorTool.Bold,
            TuiEditorTool.Italic,
            TuiEditorTool.Strikethrough,
            TuiEditorTool.HR,
        ],
    ];

    tools = this.toolsVariants[0];

    constructor(@Inject(TUI_IS_CYPRESS) readonly isCypress: boolean) {}

    get disabled(): boolean {
        return this.control.disabled;
    }

    set disabled(value: boolean) {
        if (value) {
            this.control.disable();
        } else {
            this.control.enable();
        }
    }
}
