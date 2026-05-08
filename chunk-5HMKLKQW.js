import"./chunk-DAQOROHW.js";var e=`import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiExpand, TuiNotificationService} from '@taiga-ui/core';
import {
    provideTuiEditor,
    provideTuiEditorOptions,
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
    providers: [
        provideTuiEditor(),
        provideTuiEditorOptions(() => {
            const alerts = inject(TuiNotificationService);

            return {
                editorProps: {
                    handleDOMEvents: {
                        keydown: (_, event: KeyboardEvent) => {
                            if (event.key === 'Enter' && !event.shiftKey) {
                                alerts.open('Enter <strong>pressed</strong>').subscribe();
                            }

                            return true;
                        },
                    },
                },
            };
        }),
    ],
})
export default class Example {
    protected readonly builtInTools = [TuiEditorTool.Undo];
    protected readonly isE2E = inject(WA_IS_E2E);
    protected control = new FormControl('<p>Hello world</p>');
}
`;export{e as default};
