import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ChangeDetectionStrategy, Component, inject, Injector} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TUI_IS_STACKBLITZ} from '@taiga-ui/cdk';
import {
    TUI_EDITOR_EXTENSIONS,
    TUI_IMAGE_LOADER,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@tbank/tui-editor';
import {switchMap} from 'rxjs';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, HttpClientModule, TuiEditorSocket, TuiEditor],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import('@tbank/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tbank/tui-editor').then(({tuiCreateImageEditorExtension}) =>
                    tuiCreateImageEditorExtension({injector}),
                ),
            ],
        },
    ],
})
export default class Example {
    private readonly imageLoader = inject(TUI_IMAGE_LOADER);
    private readonly isStackblitz = inject(TUI_IS_STACKBLITZ);
    private readonly relativePath = this.isStackblitz ? 'https://taiga-ui.dev/' : '';

    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];

    protected base64Image$ = inject(HttpClient)
        .get(`${this.relativePath}assets/images/lumberjack.png`, {responseType: 'blob'})
        .pipe(switchMap(file => this.imageLoader(file)));

    protected control = new FormControl('');

    constructor() {
        this.base64Image$.pipe(takeUntilDestroyed()).subscribe(src => {
            this.control.patchValue(
                `
                    <img src="${src}" width="300" alt="" />
                    <p>Try to drag right border of image!</p>
                    <p>To change min/max size of image use token <code>TUI_IMAGE_EDITOR_OPTIONS</code>.
                `,
            );
        });
    }
}
