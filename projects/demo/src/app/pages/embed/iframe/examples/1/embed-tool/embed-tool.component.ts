import {ChangeDetectionStrategy, Component, inject, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiActiveZoneDirective, TuiAutoFocusDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiTiptapEditorService} from '@taiga-ui/editor';
import {TuiInputInlineComponent} from '@taiga-ui/kit';
import {TuiHostedDropdownComponent, TuiHostedDropdownModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    selector: 'embed-tool',
    imports: [
        FormsModule,
        TuiAutoFocusDirective,
        TuiInputInlineComponent,
        TuiActiveZoneDirective,
        TuiButtonDirective,
        TuiHostedDropdownModule,
    ],
    templateUrl: './embed-tool.template.html',
    styleUrls: ['./embed-tool.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiEmbedTool {
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
