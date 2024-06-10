import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLinkDirective} from '@taiga-ui/core';
import {TUI_EDITOR_DEFAULT_EXTENSIONS, TUI_EDITOR_EXTENSIONS} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [TuiAddonDoc, TuiLinkDirective, RouterLink],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: TUI_EDITOR_DEFAULT_EXTENSIONS,
        },
    ],
})
export default class Example {
    protected readonly component1 = import('./examples/1');
    protected readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
    };
}
