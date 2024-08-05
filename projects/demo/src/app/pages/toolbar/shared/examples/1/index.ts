import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {
    AbstractTuiEditor,
    TUI_EDITOR_DEFAULT_EDITOR_TOOLS,
    tuiEditorOptionsProvider,
} from '@tinkoff/tui-editor';

@Component({
    selector: 'tui-editor-toolbar-shared-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiEditorOptionsProvider({appearance: ''})],
})
export class TuiEditorToolbarSharedExample1 {
    editorRef: AbstractTuiEditor | null = null;

    readonly builtInTools = TUI_EDITOR_DEFAULT_EDITOR_TOOLS;

    readonly group = new FormGroup({
        header: new FormControl(''),
        main: new FormControl(''),
        footer: new FormControl(''),
    });
}
