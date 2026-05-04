import { TuiExpand } from "@taiga-ui/core";
import { TuiAccordion } from "@taiga-ui/kit";
import { WA_IS_E2E } from "@ng-web-apis/platform";
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiItem} from '@taiga-ui/cdk';
import {
    provideTuiEditor,
    TUI_EDITOR_VALUE_TRANSFORMER,
    TuiEditor,
    TuiEditorSocket,
} from '@taiga-ui/editor';
import {ExampleEditorCleanupHtmlTransformer} from './transformer';

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
        provideTuiEditor(),
        {
            provide: TUI_EDITOR_VALUE_TRANSFORMER,
            useClass: ExampleEditorCleanupHtmlTransformer,
        },
    ],
})
export default class Example {
    protected readonly isE2E = inject(WA_IS_E2E);

    protected control = new FormControl(
        '<p class="t-content">TipTap Editor</p>',
        Validators.required,
    );
}
