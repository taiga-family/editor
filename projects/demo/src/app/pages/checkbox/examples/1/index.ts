import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@tbank/tui-editor';

@Component({
    selector: 'tui-editor-checkbox-example-1',
    templateUrl: './index.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tbank/tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tiptap/extension-text-style').then(
                    ({default: TextStyle}) => TextStyle,
                ),
            ],
        },
    ],
})
export class TuiEditorCheckboxExample1 {
    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Size, TuiEditorTool.List];

    control = new FormControl(`
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
