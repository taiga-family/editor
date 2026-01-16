import {DOCUMENT} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TUI_IS_E2E, TuiItem} from '@taiga-ui/cdk';
import {
    provideTuiEditor,
    provideTuiEditorOptions,
    TuiEditor,
    TuiEditorSocket,
} from '@taiga-ui/editor';
import {TuiAccordion, TuiExpand} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiAccordion,
        TuiEditor,
        TuiEditorSocket,
        TuiExpand,
        TuiItem,
    ],
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
    protected readonly isE2E = inject(TUI_IS_E2E);
    protected control = new FormControl('');
}
