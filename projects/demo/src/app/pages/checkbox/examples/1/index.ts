import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {PreviewOutput} from '@demo/shared/preview-output';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [PreviewOutput, ReactiveFormsModule, TuiEditor, TuiEditorSocket],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideTuiEditor()],
})
export default class Example {
    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Size,
        TuiEditorTool.List,
    ];

    protected control = new FormControl(`
    <p>Which do you prefer?</p>
    <ul data-type="taskList">
        <li
            data-checked="true"
            data-type="taskItem"
        >
            <label>
                <input
                    checked="checked"
                    type="checkbox"
                />
                <span></span>
            </label>
            <div>
                <p>Taiga UI</p>
                <ul data-type="taskList">
                    <li
                        data-checked="false"
                        data-type="taskItem"
                    >
                        <label>
                            <input type="checkbox" />
                            <span></span>
                        </label>
                        <div><p>v3.x</p></div>
                    </li>
                    <li
                        data-checked="true"
                        data-type="taskItem"
                    >
                        <label>
                            <input
                                checked="checked"
                                type="checkbox"
                            />
                            <span></span>
                        </label>
                        <div><p>v4.x</p></div>
                    </li>
                </ul>
            </div>
        </li>
        <li
            data-checked="false"
            data-type="taskItem"
        >
            <label>
                <input type="checkbox" />
                <span></span>
            </label>
            <div><p>Material</p></div>
        </li>
        <li
            data-checked="false"
            data-type="taskItem"
        >
            <label>
                <input type="checkbox" />
                <span></span>
            </label>
            <div><p>Prime NG</p></div>
        </li>
        <li
            data-checked="false"
            data-type="taskItem"
        >
            <label>
                <input type="checkbox" />
                <span></span>
            </label>
            <div><p>NG-Zorro</p></div>
        </li>
        <li
            data-checked="false"
            data-type="taskItem"
        >
            <label>
                <input type="checkbox" />
                <span></span>
            </label>
            <div><p>Bootstrap</p></div>
        </li>
    </ul>
    <p></p>
    `);
}
