import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorSocketComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    imports: [TuiEditorComponent, ReactiveFormsModule, TuiEditorSocketComponent],
    templateUrl: './index.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tiptap/extension-text-style').then(
                    ({default: TextStyle}) => TextStyle,
                ),
            ],
        },
    ],
})
export default class ExampleComponent {
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
