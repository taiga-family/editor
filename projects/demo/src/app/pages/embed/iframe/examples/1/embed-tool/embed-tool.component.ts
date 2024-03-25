import {ChangeDetectionStrategy, Component, inject, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiActiveZoneDirective, TuiAutoFocusDirective} from '@taiga-ui/cdk';
import type {TuiHostedDropdownComponent} from '@taiga-ui/core';
import {TuiButtonModule, TuiHostedDropdownModule} from '@taiga-ui/core';
import {TuiInputInlineModule} from '@taiga-ui/kit';
import {TuiTiptapEditorService} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    selector: 'embed-tool',
    imports: [
        FormsModule,
        TuiAutoFocusDirective,
        TuiInputInlineModule,
        TuiActiveZoneDirective,
        TuiButtonModule,
        TuiHostedDropdownModule,
    ],
    templateUrl: './embed-tool.template.html',
    styleUrls: ['./embed-tool.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiEmbedToolComponent {
    @ViewChild('dropdown')
    private readonly dropdown?: TuiHostedDropdownComponent;

    private readonly editor = inject(TuiTiptapEditorService);

    protected placeholder = 'https://my-embed.site.com/etc1235';
    protected url = '';

    protected embedSource(src: string): void {
        if (src) {
            this.editor.setIframe({src});

            this.url = '';
            this.dropdown?.close();
        }
    }
}
