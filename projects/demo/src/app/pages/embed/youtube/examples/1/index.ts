import {isPlatformServer} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {DomSanitizer, type SafeHtml} from '@angular/platform-browser';
import {PreviewOutput} from '@demo/shared/preview-output';
import {TUI_IS_E2E, TuiItem, tuiPure} from '@taiga-ui/cdk';
import {TuiIcon} from '@taiga-ui/core';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';

import {ExampleTuiYoutubeTool} from './youtube-tool/youtube-tool.component';

@Component({
    standalone: true,
    imports: [
        ExampleTuiYoutubeTool,
        PreviewOutput,
        ReactiveFormsModule,
        TuiEditor,
        TuiEditorSocket,
        TuiIcon,
        TuiItem,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor(async () =>
            import('@taiga-ui/editor/extensions/youtube').then(
                ({TuiYoutube}) => TuiYoutube,
            ),
        ),
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
        <p>Editor now supports YouTube embeds!</p>
        <div data-youtube-video>
            <iframe width="100%" src="https://www.youtube.com/watch?v=KdO8CFCXQu0"></iframe>
        </div>
        <p>Try adding your own video to this editor!</p>
    `,
        Validators.required,
    );

    @tuiPure
    protected safe(content: string | null): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(content ?? '');
    }
}
