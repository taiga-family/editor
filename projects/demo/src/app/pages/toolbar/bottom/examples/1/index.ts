import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiButtonDirective, TuiDialogService} from '@taiga-ui/core';
import {TUI_EDITOR_EXTENSIONS, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiEditor, TuiButtonDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),
                import('@taiga-ui/editor').then(({TuiLink}) => TuiLink),
            ],
        },
    ],
})
export default class Example {
    private readonly dialog = inject(TuiDialogService);

    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Link,
        TuiEditorTool.Img,
    ];

    protected readonly control = new FormControl('');

    protected send(): void {
        this.dialog.open(this.control.value).subscribe();
    }
}
