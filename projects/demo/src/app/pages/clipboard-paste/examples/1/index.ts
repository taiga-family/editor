import {DOCUMENT} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {PreviewOutput} from '@demo/shared/preview-output';
import {
    provideTuiEditor,
    provideTuiEditorOptions,
    TuiEditor,
    TuiEditorSocket,
} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [PreviewOutput, ReactiveFormsModule, TuiEditor, TuiEditorSocket],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideTuiEditor(),
        provideTuiEditorOptions(() => {
            const doc = inject(DOCUMENT);

            return {
                editorProps: {
                    transformPastedHTML(html: string): string {
                        const div = doc.createElement('div');

                        div.innerHTML = html;

                        div.querySelectorAll('[style]').forEach((el) =>
                            el.removeAttribute('style'),
                        );

                        return div.innerHTML;
                    },
                },
            };
        }),
    ],
})
export default class Example {
    protected control = new FormControl('');
}
