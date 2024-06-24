import {ChangeDetectionStrategy, Component, inject, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiActiveZone, TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {TuiTiptapEditorService} from '@taiga-ui/editor';
import {TuiInputInline} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'image-tool',
    imports: [
        FormsModule,
        TuiAutoFocus,
        TuiInputInline,
        TuiActiveZone,
        TuiDropdown,
        TuiButton,
    ],
    templateUrl: './image-tool.template.html',
    styleUrls: ['./image-tool.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiPasteImageTool {
    @ViewChild('dropdown')
    private readonly dropdown?: any;

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
