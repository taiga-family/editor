import {ChangeDetectionStrategy, Component, inject, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiActiveZoneDirective, TuiAutoFocusDirective} from '@taiga-ui/cdk';
import type {TuiHostedDropdownComponent} from '@taiga-ui/core';
import {TuiButtonDirective, TuiHostedDropdownModule} from '@taiga-ui/core';
import {TuiInputInlineModule} from '@taiga-ui/kit';
import {TuiTiptapEditorService} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    selector: 'image-tool',
    imports: [
        FormsModule,
        TuiAutoFocusDirective,
        TuiInputInlineModule,
        TuiActiveZoneDirective,
        TuiHostedDropdownModule,
        TuiButtonDirective,
    ],
    templateUrl: './image-tool.template.html',
    styleUrls: ['./image-tool.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiPasteImageToolComponent {
    @ViewChild('dropdown')
    private readonly dropdown?: TuiHostedDropdownComponent;

    private readonly editor = inject(TuiTiptapEditorService);

    protected youtubeLogo =
        'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg';

    protected placeholder = 'https://image.com/etc.png';

    protected url = '';

    protected insertImage(src: string): void {
        if (!src) {
            return;
        }

        this.editor.setImage(src);
        this.dropdown?.close();
    }
}
