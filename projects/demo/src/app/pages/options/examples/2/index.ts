import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TUI_IS_E2E, TuiItem} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';
import {
    provideTuiEditor,
    provideTuiEditorOptions,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {TuiAccordion, TuiExpand} from '@taiga-ui/experimental';

@Component({
    standalone: true,
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
            const alerts = inject(TuiAlertService);

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

    protected readonly isE2E = inject(TUI_IS_E2E);

    protected control = new FormControl('<p>Hello world</p>');
}
