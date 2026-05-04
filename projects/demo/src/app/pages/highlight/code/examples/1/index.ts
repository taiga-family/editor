import { TuiExpand } from "@taiga-ui/core";
import { TuiAccordion } from "@taiga-ui/kit";
import { WA_IS_E2E } from "@ng-web-apis/platform";
import {ChangeDetectionStrategy, Component, inject, type OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {tuiRawLoad, tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';
import {TuiItem} from '@taiga-ui/cdk';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';

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
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideTuiEditor()],
})
export default class Example implements OnInit {
    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Code];
    protected readonly isE2E = inject(WA_IS_E2E);
    protected control = new FormControl('');

    public ngOnInit(): void {
        void tuiRawLoad(import('./example.md?raw')).then((raw) => {
            const [code] = tuiTryParseMarkdownCodeBlock(raw);

            this.control.patchValue(code ?? null);
        });
    }
}
