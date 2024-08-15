import {isPlatformServer} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import type {SafeHtml} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {TUI_IS_E2E, TuiItem, tuiPure} from '@taiga-ui/cdk';
import {TuiIcon} from '@taiga-ui/core';
import {TUI_EDITOR_EXTENSIONS, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';

import {ExampleTuiYoutubeTool} from './youtube-tool/youtube-tool.component';

@Component({
    standalone: true,
    imports: [ExampleTuiYoutubeTool, ReactiveFormsModule, TuiEditor, TuiIcon, TuiItem],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@taiga-ui/editor').then(({TuiYoutube}) => TuiYoutube),
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
