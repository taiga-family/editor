import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {tuiPure} from '@taiga-ui/cdk';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@tinkoff/tui-editor';

@Component({
    selector: 'tui-editor-embed-youtube-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tinkoff/tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tinkoff/tui-editor/extensions/youtube').then(
                    ({Youtube}) => Youtube,
                ),
            ],
        },
    ],
})
export class TuiEditorEmbedYoutubeExample1 {
    readonly builtInTools = [TuiEditorTool.Undo];
    readonly control = new FormControl(
        `
        <p>Editor now supports YouTube embeds!</p>
        <div data-youtube-video>
            <iframe width="100%" src="https://www.youtube.com/watch?v=KdO8CFCXQu0"></iframe>
        </div>
        <p>Try adding your own video to this editor!</p>
    `,
        Validators.required,
    );

    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}

    /**
     * TUI_SANITIZER doesn't support iframe inside content
     */
    @tuiPure
    safe(content: string | null): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(content ?? '');
    }
}
