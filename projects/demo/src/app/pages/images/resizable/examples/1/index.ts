import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ChangeDetectionStrategy, Component, inject, Injector} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TUI_IS_STACKBLITZ, TuiDestroyService} from '@taiga-ui/cdk';
import {
    TUI_EDITOR_EXTENSIONS,
    TUI_IMAGE_LOADER,
    TuiEditorComponent,
    TuiEditorSocketComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';
import {switchMap, takeUntil} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-editor-resizable-editor-example-1',
    imports: [
        ReactiveFormsModule,
        HttpClientModule,
        TuiEditorSocketComponent,
        TuiEditorComponent,
    ],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tinkoff/tui-editor').then(({tuiCreateImageEditorExtension}) =>
                    tuiCreateImageEditorExtension({injector}),
                ),
            ],
        },
    ],
})
export class TuiEditorResizableEditorExample1 {
    private readonly imageLoader = inject(TUI_IMAGE_LOADER);
    private readonly isStackblitz = inject(TUI_IS_STACKBLITZ);
    private readonly relativePath = this.isStackblitz ? 'https://taiga-ui.dev/' : '';

    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];

    protected base64Image$ = inject(HttpClient)
        .get(`${this.relativePath}assets/images/lumberjack.png`, {responseType: 'blob'})
        .pipe(switchMap(file => this.imageLoader(file)));

    protected control = new FormControl('');

    constructor() {
        this.base64Image$
            .pipe(takeUntil(inject(TuiDestroyService, {self: true})))
            .subscribe(src => {
                this.control.patchValue(
                    `
                    <img data-type="image-editor" src="${src}" width="300">
                    <p>Try to drag right border of image!</p>
                    <p>To change min/max size of image use token <code>TUI_IMAGE_EDITOR_OPTIONS</code>.
                `,
                );
            });
    }
}
