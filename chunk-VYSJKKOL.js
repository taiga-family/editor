import"./chunk-DAQOROHW.js";var t=`import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiExpand} from '@taiga-ui/core';
import {
    provideTuiEditor,
    TUI_EDITOR_VALUE_TRANSFORMER,
    TuiEditor,
    TuiEditorSocket,
} from '@taiga-ui/editor';
import {TuiAccordion} from '@taiga-ui/kit';

import {ExampleEditorCleanupHtmlTransformer} from './transformer';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiAccordion,
        TuiEditor,
        TuiEditorSocket,
        TuiExpand,
        TuiItem,
    ],
    exportAs: 'cleanup-example',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor(),
        {
            provide: TUI_EDITOR_VALUE_TRANSFORMER,
            useClass: ExampleEditorCleanupHtmlTransformer,
        },
    ],
})
export default class Example {
    protected readonly isE2E = inject(WA_IS_E2E);

    protected control = new FormControl(
        '<p class="t-content">TipTap Editor</p>',
        Validators.required,
    );
}
`;export{t as default};
