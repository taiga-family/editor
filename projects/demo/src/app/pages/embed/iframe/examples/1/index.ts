import {ChangeDetectionStrategy, Component, inject, Injector} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import type {SafeHtml} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {TUI_IS_E2E, TuiItemModule, tuiPure} from '@taiga-ui/cdk';
import {TuiSvgModule} from '@taiga-ui/core';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

import {ExampleTuiEmbedToolComponent} from './embed-tool/embed-tool.component';

@Component({
    standalone: true,
    imports: [
        ExampleTuiEmbedToolComponent,
        TuiSvgModule,
        ReactiveFormsModule,
        TuiItemModule,
        TuiEditorComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
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
export default class ExampleComponent {
    private readonly sanitizer = inject(DomSanitizer);
    private readonly isE2E = inject(TUI_IS_E2E);

    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected readonly control = new FormControl(
        `
        <p>Here is an online IDE:</p>
        <iframe
         src="https://codepen.io/mehdinajafi/embed/LYyqNqR?default-tab=html${
             this.isE2E ? '' : '%2Cresult'
         }&editable=true"
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
