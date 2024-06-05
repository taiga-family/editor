import {ChangeDetectionStrategy, Component, Inject, Injector} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiDialogService} from '@taiga-ui/core';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@tbank/tui-editor';

@Component({
    selector: 'tui-editor-toolbar-bottom-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (_injector: Injector) => [
                import('@tbank/tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),
                import('@tbank/tui-editor/extensions/link').then(({TuiLink}) => TuiLink),
            ],
        },
    ],
})
export class TuiEditorToolbarBottomExample1 {
    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Link, TuiEditorTool.Img];

    readonly control = new FormControl('');

    constructor(@Inject(TuiDialogService) private readonly dialog: TuiDialogService) {}

    send(): void {
        this.dialog.open(this.control.value).subscribe();
    }
}
