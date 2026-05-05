import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/images/resizable/examples/1/index.ts?raw
var __default = `import {isPlatformServer} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiExpand} from '@taiga-ui/core';
import {
    provideTuiEditor,
    TUI_IMAGE_EDITOR_OPTIONS,
    TUI_IMAGE_LOADER,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {TuiAccordion} from '@taiga-ui/kit';
import {switchMap} from 'rxjs';

@Component({
    imports: [
        HttpClientModule,
        ReactiveFormsModule,
        TuiAccordion,
        TuiEditor,
        TuiEditorSocket,
        TuiExpand,
        TuiItem,
    ],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor({image: true}),
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
    private readonly http = inject(HttpClient);
    private readonly imageLoader = inject(TUI_IMAGE_LOADER);
    private readonly platformId = inject(PLATFORM_ID);
    protected readonly isE2E = inject(WA_IS_E2E);

    protected readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Img,
        TuiEditorTool.Link,
    ];

    protected control = new FormControl('');

    constructor() {
        if (isPlatformServer(this.platformId)) {
            return;
        }

        this.http
            .get('assets/images/lumberjack.png', {responseType: 'blob'})
            .pipe(
                switchMap((file) => this.imageLoader(file)),
                takeUntilDestroyed(),
            )
            .subscribe((src) => {
                this.control.patchValue(\`
                    <img src="\${src}" width="300" alt="" />
                    <p>Try to drag right border of image!</p>
                    <p>To change min/max size of image use token <code>TUI_IMAGE_EDITOR_OPTIONS</code>.
                \`);
            });
    }
}
`;
export {
  __default as default
};
//# sourceMappingURL=chunk-NPCS7UEY.js.map
