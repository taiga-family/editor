import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TUI_EDITOR_DEFAULT_EXTENSIONS, TUI_EDITOR_EXTENSIONS} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [TuiAddonDoc],
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
    protected readonly example1 = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        './custom-toolbar.ts': import('./examples/1/custom-toolbar/index.ts?raw'),
        './custom-toolbar.html': import('./examples/1/custom-toolbar/index.html?raw'),
        './custom-toolbar.less': import('./examples/1/custom-toolbar/index.less?raw'),
    };
}
