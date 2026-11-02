import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/sanitize/examples/1/index.ts?raw
var __default = `import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiExpand} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@taiga-ui/dompurify';
import {
    provideTuiEditor,
    TUI_EDITOR_SANITIZER,
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
        provideTuiEditor(),
        {
            provide: TUI_EDITOR_SANITIZER,
            useClass: NgDompurifySanitizer,
        },
    ],
})
export default class Example {
    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected control = new FormControl(/* HTML */ \`
        <img
            src="x"
            onerror="javascript:alert(1)"
        />
        <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
        >
            <span style="font-size: 15px;">Google</span>
        </a>
    \`);
}
`;
export {
  __default as default
};
//# sourceMappingURL=chunk-CNX2O3LW.js.map
