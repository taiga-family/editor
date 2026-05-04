import { TuiAccordion } from "@taiga-ui/kit";
import { WA_IS_E2E } from "@ng-web-apis/platform";
import { TuiNotificationService, TuiExpand } from "@taiga-ui/core";
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiItem} from '@taiga-ui/cdk';
import {
    provideTuiEditor,
    provideTuiEditorOptions,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';

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
