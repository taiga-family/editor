import {AsyncPipe, DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Injector,
    ViewChild,
} from '@angular/core';
import type {AbstractControl, ValidationErrors} from '@angular/forms';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiValidationError, TuiValidator} from '@taiga-ui/cdk';
import {TuiError, TuiLoader} from '@taiga-ui/core';
import {
    TUI_EDITOR_EXTENSIONS,
    TUI_IMAGE_EDITOR_OPTIONS,
    TUI_IMAGE_LOADER,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';

import {imageLoader} from './image-loader';
import {ImgbbService} from './imgbb.service';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiEditor,
        TuiEditorSocket,
        TuiError,
        TuiFieldErrorPipe,
        TuiLoader,
        TuiValidator,
    ],
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
            ],
        },
        {
            provide: TUI_IMAGE_EDITOR_OPTIONS,
            useValue: {
                minWidth: 100,
                maxWidth: 400,
            },
        },
        {
            provide: TUI_IMAGE_LOADER,
            useFactory: imageLoader,
            deps: [ImgbbService],
        },
    ],
})
export default class Example {
    @ViewChild(TuiEditor, {static: true})
    private readonly editor?: TuiEditor;

    protected readonly doc = inject(DOCUMENT);
    protected readonly imgbbService = inject(ImgbbService);
    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];

    protected control = new FormControl('');

    constructor() {
        this.control.patchValue(
            `
                <img src="assets/images/lumberjack.png" width="300" />
                <p>Try to drag right border of image!</p>
                <p>To change min/max size of image use token <code>TUI_IMAGE_EDITOR_OPTIONS</code>.</p>
                <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwIDUwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPjxzdHlsZT4uYXtmaWxsOiNkZDAwMzF9LmJ7ZmlsbDojYzMwMDJmfS5je2ZpbGw6I2ZmZn08L3N0eWxlPjxwYXRoIGNsYXNzPSJhIiBkPSJtNDMuNiAxMi42bC0yLjggMjQuNy0xNS44IDguNy0xNS44LTguNy0yLjgtMjQuNyAxOC42LTYuNnoiLz48cGF0aCBjbGFzcz0iYiIgZD0ibTI1IDZsMTguNiA2LjYtMi44IDI0LjctMTUuOCA4Ljd2LTE1LjMtMjAuMy00LjR6Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGFzcz0iYyIgZD0ibTM2LjYgMzYuNWgtNC4zbC0yLjQtNS44aC05LjlsLTIuMyA1LjhoLTQuM2wxMS42LTI2LjF6bS0xMS42LTE3LjZsLTMuNCA4LjJoNi44eiIvPjwvc3ZnPg==" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <img src="assets/images/lumberjack.png" width="300" style="float: right" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <img src="assets/images/lumberjack.png" width="300" style="float: left" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <img src="assets/images/lumberjack.png" width="300" style="display: flex; justify-content: center; margin-left: auto; margin-right: auto;" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            `,
        );
    }

    protected readonly validator = ({value}: AbstractControl): ValidationErrors | null =>
        this.editor?.focused ||
        this.imgbbService.isLoading ||
        !this.doc.hasFocus() || // possible that file dialog is open
        value.length
            ? null
            : {empty: new TuiValidationError('ERROR: content must not be empty')};
}
