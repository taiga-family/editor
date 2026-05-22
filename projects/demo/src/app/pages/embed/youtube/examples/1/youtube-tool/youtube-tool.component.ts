import {ChangeDetectionStrategy, Component, inject, viewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown, TuiDropdownOpen} from '@taiga-ui/core';
import {TuiTiptapEditorService} from '@taiga-ui/editor';
import {TuiInputInline} from '@taiga-ui/kit';

@Component({
    selector: 'youtube-tool',
    imports: [FormsModule, TuiAutoFocus, TuiButton, TuiDropdown, TuiInputInline],
    templateUrl: './youtube-tool.template.html',
    styleUrl: './youtube-tool.styles.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiYoutubeTool {
    private readonly dropdown = viewChild.required('dropdown', {read: TuiDropdownOpen});
    private readonly editor = inject(TuiTiptapEditorService);

    protected youtubeLogo = 'https://cdn.worldvectorlogo.com/logos/play-icon.svg';
    protected placeholder = 'https://www.youtube.com/embed/abc..';
    protected url = '';

    protected insertYoutubeVideo(src: string): void {
        if (src) {
            const prevLine = this.editor.state?.selection.anchor;

            // @note: don't use `setHardBreak`,
            // it inherits styles of previous lines
            // required two line after
            // this.editor.enter();
            this.editor.enter();
            this.editor.setTextSelection(prevLine ?? 0);
            this.editor.setYoutubeVideo({src, width: '100%'});

            this.url = '';
            this.dropdown().toggle(false);
        }
    }
}
