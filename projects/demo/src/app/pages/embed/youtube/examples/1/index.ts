import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import type {SafeHtml} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {TuiItemModule, tuiPure} from '@taiga-ui/cdk';
import {TuiSvgModule} from '@taiga-ui/core';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorTool,
} from '@tinkoff/tui-editor';

import {ExampleTuiYoutubeToolComponent} from './youtube-tool/youtube-tool.component';

@Component({
    standalone: true,
    imports: [
        TuiSvgModule,
        ExampleTuiYoutubeToolComponent,
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
            useValue: [
                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tinkoff/tui-editor').then(({TuiYoutube}) => TuiYoutube),
            ],
        },
    ],
})
export default class ExampleComponent {
    private readonly sanitizer = inject(DomSanitizer);

    protected readonly builtInTools = [TuiEditorTool.Undo];
    protected readonly control = new FormControl(
        `
        <p>Editor now supports YouTube embeds!</p>
        <div data-youtube-video>
            <iframe width="100%" src="https://www.youtube.com/watch?v=KdO8CFCXQu0"></iframe>
        </div>
        <p>Try adding your own video to this editor!</p>
    `,
        Validators.required,
    );

    /**
     * TUI_SANITIZER doesn't support iframe inside content
     */
    @tuiPure
    protected safe(content: string | null): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(content ?? '');
    }
}
