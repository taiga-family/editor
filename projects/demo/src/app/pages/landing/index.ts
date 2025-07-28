import {ChangeDetectionStrategy, Component, Injector} from '@angular/core';
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
    TUI_EDITOR_DEFAULT_EXTENSIONS,
    TUI_EDITOR_DEFAULT_TOOLS,
    TUI_EDITOR_EXTENSIONS,
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
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                ...TUI_EDITOR_DEFAULT_EXTENSIONS,
                import('@taiga-ui/editor').then(({setup}) => setup({injector})),
            ],
        },
    ],
})
export default class Page {
    public readonly builtInTools = TUI_EDITOR_DEFAULT_TOOLS;
    public value = content;
}
