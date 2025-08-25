import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type TuiEditorOptions} from '@taiga-ui/editor/common';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiTaskListTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {
        '(click)': 'editor?.toggleTaskList()',
        '[attr.automation-id]': '"toolbar__task-list-button"',
    },
})
export class TuiTaskListButtonTool extends TuiToolbarTool {
    protected override isActive(): boolean {
        return this.editor?.isActive('taskList') ?? false;
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.taskList;
    }

    protected getHint(): string {
        return '';
    }
}
