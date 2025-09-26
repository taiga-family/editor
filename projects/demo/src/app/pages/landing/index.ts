import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {
    TuiAppearance,
    TuiButton,
    TuiIcon,
    TuiLink,
    TuiRoot,
    TuiTitle,
} from '@taiga-ui/core';
import {
    provideTuiEditor,
    TUI_EDITOR_DEFAULT_TOOLS,
    TuiEditor,
    TuiToolbar,
} from '@taiga-ui/editor';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

import content from './content.html?raw';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        RouterLink,
        TuiAppearance,
        TuiButton,
        TuiCardLarge,
        TuiEditor,
        TuiHeader,
        TuiIcon,
        TuiLink,
        TuiRoot,
        TuiTitle,
        TuiToolbar,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
