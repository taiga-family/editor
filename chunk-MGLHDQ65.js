import"./chunk-DAQOROHW.js";var e=`import {ChangeDetectionStrategy, Component, inject, viewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {TuiTiptapEditorService} from '@taiga-ui/editor';
import {TuiInputInline} from '@taiga-ui/kit';

@Component({
    selector: 'image-tool',
    imports: [FormsModule, TuiAutoFocus, TuiButton, TuiDropdown, TuiInputInline],
    templateUrl: './image-tool.template.html',
    styleUrl: './image-tool.styles.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiPasteImageTool {
    private readonly dropdown = viewChild.required<any>('dropdown');
    private readonly editor = inject(TuiTiptapEditorService);
    protected youtubeLogo = 'assets/icons/google.svg';
    protected placeholder = 'Path to Image URL (ex. https://your-site.com/image.png)';
    protected url = '';

    protected insertImage(src: string): void {
        if (!src) {
            return;
        }

        this.editor.setImage(src);
        this.dropdown()?.close();
    }
}
`;export{e as default};
