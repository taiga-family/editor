import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';

import {TuiToolbarButtonTool} from '../tool';

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
export class TuiTaskListButtonTool extends TuiToolbarButtonTool {
    protected override getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.taskList;
    }
}
