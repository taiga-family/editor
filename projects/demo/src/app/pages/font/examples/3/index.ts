import { TuiExpand } from "@taiga-ui/core";
import { TuiAccordion } from "@taiga-ui/kit";
import { WA_IS_E2E } from "@ng-web-apis/platform";
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiItem} from '@taiga-ui/cdk';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {ExampleTuiFontSizeTool} from './font-size-tool';

@Component({
    imports: [
        ExampleTuiFontSizeTool,
        ReactiveFormsModule,
        TuiAccordion,
        TuiEditor,
        TuiEditorSocket,
        TuiExpand,
        TuiItem,
    ],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideTuiEditor()],
})
export default class Example {
    protected readonly builtInTools = [TuiEditorTool.Undo];
    protected readonly isE2E = inject(WA_IS_E2E);

    protected control = new FormControl(`
        <p>Hello</p>
        <p><span style="font-size: 24px">Hello world</span></p>
    `);
}
