import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiExpand} from '@taiga-ui/core';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
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
        provideTuiEditor({
            details: {inheritOpen: true},
            detailsSummary: true,
            detailsContent: true,
        }),
    ],
})
export default class Example {
    protected builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Size,
        TuiEditorTool.Bold,
        TuiEditorTool.Italic,
        TuiEditorTool.Underline,
        TuiEditorTool.Details,
    ];

    protected readonly isE2E = inject(WA_IS_E2E);

    protected control = new FormControl(`
        <details open>
            <summary><p>Title 1</p></summary>

            <div data-type="details-content">
                <p>Content 1</p>

                <details open>
                    <summary><p>Title 2</p></summary>

                    <div data-type="details-content">
                        <p>Content 2</p>
                    </div>
                </details>
            </div>
        </details>
    `);
}
