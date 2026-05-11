import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {TuiButton, TuiIcon, TuiRoot, TuiTitle} from '@taiga-ui/core';
import {
    provideTuiEditor,
    TUI_EDITOR_DEFAULT_TOOLS,
    TuiEditor,
    TuiToolbar,
} from '@taiga-ui/editor';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

import content from './content.html?raw';

@Component({
    imports: [
        FormsModule,
        RouterLink,
        TuiButton,
        TuiCardLarge,
        TuiEditor,
        TuiHeader,
        TuiIcon,
        TuiRoot,
        TuiTitle,
        TuiToolbar,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor({
            image: true,
            details: true,
            detailsSummary: true,
            detailsContent: true,
            iframe: true,
            video: true,
            audio: true,
            source: true,
        }),
    ],
})
export default class Page {
    public readonly builtInTools = TUI_EDITOR_DEFAULT_TOOLS;
    public value = content;
}
