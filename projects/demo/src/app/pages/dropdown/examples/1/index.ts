import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiEditor, TuiEditorSocket],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useFactory: () => [
                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@taiga-ui/editor').then(({TuiSuggestionList}) =>
                    TuiSuggestionList.configure({
                        editor: false,
                    }),
                ),
            ],
        },
    ],
})
export default class Example {
    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected control = new FormControl('');
}
