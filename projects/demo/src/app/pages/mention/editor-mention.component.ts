import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'editor-mention',
    templateUrl: './editor-mention.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiEditorMentionComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
        'mention.ts': import('./examples/1/mention/index.ts?raw'),
        'mention.html': import('./examples/1/mention/index.html?raw'),
    };
}
