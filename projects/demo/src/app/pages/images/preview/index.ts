import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDocExampleModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkDirective} from '@taiga-ui/core';
import {TUI_EDITOR_DEFAULT_EXTENSIONS, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    imports: [TuiDocExampleModule, TuiDocPageModule, TuiLinkDirective, RouterLink],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: TUI_EDITOR_DEFAULT_EXTENSIONS,
        },
    ],
})
export default class ExampleComponent {
    protected readonly component1 = import('./examples/1');
    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        'image-preview/image-preview.template.html': import(
            './examples/1/image-preview/image-preview.template.html?raw'
        ),
        'image-preview/image-preview.style.less': import(
            './examples/1/image-preview/image-preview.style.less?raw'
        ),
        'image-preview/image-preview.component.ts': import(
            './examples/1/image-preview/image-preview.component.ts?raw'
        ),
    };
}
