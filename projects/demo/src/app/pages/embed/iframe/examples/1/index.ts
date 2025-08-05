import {isPlatformServer} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Injector,
    PLATFORM_ID,
} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import type {SafeHtml} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {TuiContentTable} from '@demo/shared/content-table';
import {TUI_IS_E2E, TuiItem, tuiPure} from '@taiga-ui/cdk';
import {TuiIcon} from '@taiga-ui/core';
import {TUI_EDITOR_EXTENSIONS, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';

import {ExampleTuiEmbedTool} from './embed-tool/embed-tool.component';

@Component({
    standalone: true,
    imports: [
        ExampleTuiEmbedTool,
        ReactiveFormsModule,
        TuiContentTable,
        TuiEditor,
        TuiIcon,
        TuiItem,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@taiga-ui/editor').then(({tuiCreateIframeEditorExtension}) =>
                    tuiCreateIframeEditorExtension({injector}),
                ),
            ],
        },
    ],
})
export default class Example {
    private readonly sanitizer = inject(DomSanitizer);
    private readonly isNotStatic =
        inject(TUI_IS_E2E) || isPlatformServer(inject(PLATFORM_ID));

    protected readonly builtInTools = [TuiEditorTool.Undo];
    protected readonly control = new FormControl(
        this.isNotStatic
            ? ''
            : `
        <p>Here is an online IDE:</p>
        <iframe
         src="https://codepen.io/mehdinajafi/embed/LYyqNqR?default-tab=html$%2Cresult&editable=true"
         height="375"
         width="100%"
         scrolling="no"
         frameborder="no"
         loading="lazy"
         allowtransparency="true"
         data-type="iframe-editor"
         allowfullscreen="true">
        </iframe>
        </iframe>
        <p>Here is a media player:</p>
        <iframe
            src="https://bandcamp.com/EmbeddedPlayer/album=2219061201/size=small/bgcol=ffffff/linkcol=63b2cc/transparent=true/"
            height="42"
            width="100%"
            data-type="iframe-editor">
        </iframe>
        <p></p>
    `,
        Validators.required,
    );

    @tuiPure
    protected safe(content: string | null): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(content ?? '');
    }
}
