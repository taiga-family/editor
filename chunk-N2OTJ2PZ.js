import"./chunk-DAQOROHW.js";var e=`import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
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
                    nested: false,
                    draggable: false,
                    createOnEnter: true,
                    // @note: you can override css styles with your own classes
                    groupNodeClass: 'filled-group',
                    groupPointerNodeClass: '', // anyway element doesn't exists if \`draggable\` is false
                }),
            ),
        ),
    ],
})
export default class Example {
    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Group,
        TuiEditorTool.Hilite,
    ];

    protected control = new FormControl('');
    protected readonly isE2E = inject(WA_IS_E2E);

    constructor() {
        this.control.patchValue(
            '<div data-type="group" style="background-color: blue"><p>This is a boring paragraph.</p></div><div data-type="group"><p>And another paragraph.</p></div><div data-type="group" style="background-color: green"><p>Let\u2019s finish with a boring paragraph.</p></div>',
        );
    }
}
`;export{e as default};
