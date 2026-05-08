import"./chunk-DAQOROHW.js";var r=`import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
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
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor(async () =>
            import('@taiga-ui/editor').then(({tuiCreateGroupExtension}) =>
                tuiCreateGroupExtension({
                    draggable: false,
                    // @note: you can override css styles with your own classes
                    groupNodeClass: 'group',
                    groupPointerNodeClass: '', // anyway element doesn't exists if \`draggable\` is false
                }),
            ),
        ),
    ],
})
export default class Example {
    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Group];
    protected readonly isE2E = inject(WA_IS_E2E);
    protected control = new FormControl('');

    constructor() {
        this.control.patchValue(
            '<p>This is a boring paragraph.</p><div data-type="group"><p>And another paragraph.</p><div data-type="group"><p>And a nested paragraph.</p><div data-type="group"><p>But can we go deeper?</p></div></div></div><p>Let\u2019s finish with a boring paragraph.</p>',
        );
    }
}
`;export{r as default};
