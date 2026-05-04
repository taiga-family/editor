import {isPlatformServer} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {DomSanitizer, type SafeHtml} from '@angular/platform-browser';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiExpand, TuiIcon} from '@taiga-ui/core';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {TuiAccordion} from '@taiga-ui/kit';
import {tuiPure} from '@taiga-ui/legacy';

import {ExampleTuiYoutubeTool} from './youtube-tool/youtube-tool.component';

@Component({
    imports: [
        ExampleTuiYoutubeTool,
        ReactiveFormsModule,
        TuiAccordion,
        TuiEditor,
        TuiEditorSocket,
        TuiExpand,
        TuiIcon,
        TuiItem,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
        inject(WA_IS_E2E) || isPlatformServer(inject(PLATFORM_ID));

    protected readonly isE2E = inject(WA_IS_E2E);
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
