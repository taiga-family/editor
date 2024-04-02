import {ChangeDetectionStrategy, Component, inject, Injector} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiButtonDirective, TuiDialogService} from '@taiga-ui/core';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiEditorComponent, TuiButtonDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (_injector: Injector) => [
                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),
                import('@tinkoff/tui-editor').then(({TuiLink}) => TuiLink),
            ],
        },
    ],
})
export default class ExampleComponent {
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
