import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'editor-font',
    templateUrl: './editor-font.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiEditorFontComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3?raw'),
        HTML: import('./examples/3/index.html?raw'),
        'font-size-tool/font-size-tool.component.ts': import(
            './examples/3/font-size-tool/font-size-tool.component.ts?raw'
        ),
        'font-size-tool/font-size-tool.template.html': import(
            './examples/3/font-size-tool/font-size-tool.template.html?raw'
        ),
        'font-size-tool/font-size-tool.module.ts': import(
            './examples/3/font-size-tool/font-size-tool.module.ts?raw'
        ),
    };
}
