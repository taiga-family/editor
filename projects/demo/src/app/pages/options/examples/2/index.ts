import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiContentTable} from '@demo/shared/content-table';
import {TuiAlertService} from '@taiga-ui/core';
import type {TuiEditorOptions} from '@taiga-ui/editor';
import {
    TUI_EDITOR_DEFAULT_OPTIONS,
    TUI_EDITOR_EXTENSIONS,
    TUI_EDITOR_OPTIONS,
    TuiEditor,
    TuiEditorTool,
} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiContentTable, TuiEditor],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_OPTIONS,
            deps: [TuiAlertService],
            useFactory(alerts: TuiAlertService): TuiEditorOptions {
                return {
                    ...TUI_EDITOR_DEFAULT_OPTIONS,
                    editorProps: {
                        handleDOMEvents: {
                            keydown: (_, event: KeyboardEvent) => {
                                if (event.key === 'Enter' && !event.shiftKey) {
                                    alerts
                                        .open('Enter <strong>pressed</strong>')
                                        .subscribe();
                                }

                                return true;
                            },
                        },
                    },
                };
            },
        },
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),
            ],
        },
    ],
})
export default class Example {
    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected control = new FormControl('<p>Hello world</p>');
}
