import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiContentTable} from '@demo/shared/content-table';
import {TuiAlertService} from '@taiga-ui/core';
import {
    provideTuiEditor,
    provideTuiEditorOptions,
    TuiEditor,
    TuiEditorTool,
} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiContentTable, TuiEditor],
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
