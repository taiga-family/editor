import {HttpClient} from '@angular/common/http';
import {ChangeDetectionStrategy, Component, Inject, Injector, Self} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TUI_IS_STACKBLITZ, TuiDestroyService, TuiHandler} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {switchMap, takeUntil} from 'rxjs/operators';

import {
    TUI_EDITOR_EXTENSIONS,
    TUI_IMAGE_LOADER,
    TuiEditorTool,
} from '../../../../../../../../tui-editor';

@Component({
    selector: 'tui-editor-resizable-editor-example-1',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import('../../../../../../../../tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('../../../../../../../../tui-editor/extensions/image-editor').then(
                    ({tuiCreateImageEditorExtension}) =>
                        tuiCreateImageEditorExtension({injector}),
                ),
            ],
        },
    ],
})
export class TuiEditorResizableEditorExample1 {
    private readonly relativePath = this.isStackblitz ? 'https://taiga-ui.dev/' : '';

    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];

    base64Image$ = this.http
        .get(`${this.relativePath}assets/images/lumberjack.png`, {responseType: 'blob'})
        .pipe(switchMap(file => this.imageLoader(file)));

    control = new FormControl('');

    constructor(
        @Inject(TUI_IMAGE_LOADER)
        private readonly imageLoader: TuiHandler<Blob, Observable<string>>,
        @Inject(HttpClient) private readonly http: HttpClient,
        @Self() @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Inject(TUI_IS_STACKBLITZ) private readonly isStackblitz: boolean,
    ) {
        this.base64Image$.pipe(takeUntil(destroy$)).subscribe(src => {
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
