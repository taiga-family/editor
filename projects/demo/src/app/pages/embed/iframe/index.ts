import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    imports: [TuiAddonDoc],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
    protected readonly component1 = import('./examples/1');
    protected readonly example1 = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
        LESS: import('./examples/1/index.less?raw'),
        'embed-tool/embed-tool.component.ts': import(
            './examples/1/embed-tool/embed-tool.component.ts?raw'
        ),
        'embed-tool/embed-tool.template.html': import(
            './examples/1/embed-tool/embed-tool.template.html?raw'
        ),
        'embed-tool/embed-tool.styles.less': import(
            './examples/1/embed-tool/embed-tool.styles.less?raw'
        ),
    };
}
