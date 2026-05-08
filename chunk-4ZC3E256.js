import"./chunk-DAQOROHW.js";var a=`import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiExpand} from '@taiga-ui/core';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiAccordion,
        TuiEditor,
        TuiEditorSocket,
        TuiExpand,
        TuiItem,
    ],
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

    protected readonly isE2E = inject(WA_IS_E2E);

    protected control = new FormControl(\`
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
    \`);
}
`;export{a as default};
