import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ChangeDetectionStrategy, Component, inject, Injector} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiContentTable} from '@demo/shared/content-table';
import {
    TUI_EDITOR_EXTENSIONS,
    TUI_IMAGE_EDITOR_OPTIONS,
    TUI_IMAGE_LOADER,
    TuiEditor,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {switchMap} from 'rxjs';

@Component({
    standalone: true,
    imports: [HttpClientModule, ReactiveFormsModule, TuiContentTable, TuiEditor],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@taiga-ui/editor').then(({tuiCreateImageEditorExtension}) =>
                    tuiCreateImageEditorExtension({injector}),
                ),
                import('@taiga-ui/editor').then(({TuiLink}) => TuiLink),
            ],
        },
        {
            provide: TUI_IMAGE_EDITOR_OPTIONS,
            useValue: {
                minWidth: 20,
                maxWidth: 800,
            },
        },
    ],
})
export default class Example {
    private readonly imageLoader = inject(TUI_IMAGE_LOADER);

    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Img,
        TuiEditorTool.Link,
    ];

    protected base64Image$ = inject(HttpClient)
        .get('assets/images/lumberjack.png', {responseType: 'blob'})
        .pipe(switchMap((file) => this.imageLoader(file)));

    protected control = new FormControl('');

    constructor() {
        this.base64Image$.pipe(takeUntilDestroyed()).subscribe((src) => {
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
