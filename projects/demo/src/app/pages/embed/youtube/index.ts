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
        'youtube-tool/youtube-tool.component.ts': import(
            './examples/1/youtube-tool/youtube-tool.component.ts?raw'
        ),
        'youtube-tool/youtube-tool.template.html': import(
            './examples/1/youtube-tool/youtube-tool.template.html?raw'
        ),
        'youtube-tool/youtube-tool.styles.less': import(
            './examples/1/youtube-tool/youtube-tool.styles.less?raw'
        ),
    };
}
