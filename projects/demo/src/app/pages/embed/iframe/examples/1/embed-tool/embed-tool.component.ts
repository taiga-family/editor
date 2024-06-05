import {ChangeDetectionStrategy, Component, Inject, ViewChild} from '@angular/core';
import {TuiHostedDropdownComponent} from '@taiga-ui/core';
import {TuiTiptapEditorService} from '@tbank/tui-editor';

@Component({
    selector: 'embed-tool',
    templateUrl: './embed-tool.template.html',
    styleUrls: ['./embed-tool.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiEmbedToolComponent {
    @ViewChild('dropdown')
    private readonly dropdown?: TuiHostedDropdownComponent;

    placeholder = 'https://my-embed.site.com/etc1235';
    url = '';

    constructor(
        @Inject(TuiTiptapEditorService)
        private readonly editor: TuiTiptapEditorService,
    ) {}

    embedSource(src: string): void {
        if (src) {
            this.editor.setIframe({src});

            this.url = '';
            this.dropdown?.close();
        }
    }
}
