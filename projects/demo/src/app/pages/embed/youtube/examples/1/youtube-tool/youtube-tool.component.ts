import {ChangeDetectionStrategy, Component, inject, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiActiveZoneDirective, TuiAutoFocusDirective} from '@taiga-ui/cdk';
import type {TuiHostedDropdownComponent} from '@taiga-ui/core';
import {TuiButtonDirective, TuiHostedDropdownModule} from '@taiga-ui/core';
import {TuiInputInlineComponent} from '@taiga-ui/kit';
import {TuiTiptapEditorService} from '@tbank/tui-editor';

@Component({
    standalone: true,
    selector: 'youtube-tool',
    imports: [
        TuiInputInlineComponent,
        TuiAutoFocusDirective,
        FormsModule,
        TuiActiveZoneDirective,
        TuiHostedDropdownModule,
        TuiButtonDirective,
    ],
    templateUrl: './youtube-tool.template.html',
    styleUrls: ['./youtube-tool.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiYoutubeToolComponent {
    @ViewChild('dropdown')
    private readonly dropdown?: TuiHostedDropdownComponent;

    private readonly editor = inject(TuiTiptapEditorService);

    protected youtubeLogo = 'https://cdn.worldvectorlogo.com/logos/play-icon.svg';
    protected placeholder = 'https://www.youtube.com/embed/abc..';
    protected url = '';

    protected insertYoutubeVideo(src: string): void {
        if (src) {
            const prevLine = this.editor.state.selection.anchor;

            // @note: don't use `setHardBreak`,
            // it inherits styles of previous lines
            // required two line after
            // this.editor.enter();
            this.editor.enter();
            this.editor.setTextSelection(prevLine);
            this.editor.setYoutubeVideo({src, width: '100%'});

            this.url = '';
            this.dropdown?.close();
        }
    }
}
