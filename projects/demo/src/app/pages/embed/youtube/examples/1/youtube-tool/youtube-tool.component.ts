import {ChangeDetectionStrategy, Component, inject, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiActiveZone, TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {TuiTiptapEditorService} from '@taiga-ui/editor';
import {TuiInputInline} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'youtube-tool',
    imports: [
        TuiInputInline,
        TuiAutoFocus,
        FormsModule,
        TuiActiveZone,
        TuiDropdown,
        TuiButton,
    ],
    templateUrl: './youtube-tool.template.html',
    styleUrls: ['./youtube-tool.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiYoutubeTool {
    @ViewChild('dropdown')
    private readonly dropdown?: any;

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
