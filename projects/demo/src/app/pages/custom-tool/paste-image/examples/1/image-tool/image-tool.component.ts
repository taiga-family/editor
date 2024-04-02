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

    // eslint-disable-next-line @typescript-eslint/quotes
    protected youtubeLogo = `<?xml version="1.0" ?><svg width="24px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="385.829,128 385.829,256 347.429,291.072 307.2,256 272.457,241.371 306.59,165.51 " style="fill:#D32E2A;"/><polygon points="384,385.219 256,385.219 255.39,383.391 226.133,356.291 255.39,308.041 270.629,271.848   355.962,302.043 " style="fill:#3A5BBC;"/><polygon points="256.61,128.61 288.305,164.901 256.61,203.959 241.371,240.152 161.524,200.253 128,126.781   256,126.781 " style="fill:#FBBB00;"/><polygon points="239.543,270.629 204.495,346.843 126.171,384 126.171,256 163.962,232.558 204.8,256 " style="fill:#28B446;"/><polygon points="512,256 384,385.219 270.629,271.848 307.2,256 385.829,256 " style="fill:#518EF8;"/><polygon points="255.39,383.391 255.39,512 126.171,384 239.543,270.629 255.39,307.2 255.39,308.041 " style="fill:#91C646;"/><polygon points="241.371,240.152 204.8,256 126.171,256 0,256 128,126.781 " style="fill:#FFD837;"/><polygon points="385.829,128 272.457,241.371 256.61,204.8 256.61,203.959 256.61,128.61 256.61,0 " style="fill:#F14336;"/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>`;

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
