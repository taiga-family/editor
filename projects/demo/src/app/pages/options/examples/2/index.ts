import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {PreviewOutput} from '@demo/shared/preview-output';
import {TuiAlertService} from '@taiga-ui/core';
import {
    provideTuiEditor,
    provideTuiEditorOptions,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [PreviewOutput, ReactiveFormsModule, TuiEditor, TuiEditorSocket],
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

    protected control = new FormControl('<p>Hello world</p>');
}
