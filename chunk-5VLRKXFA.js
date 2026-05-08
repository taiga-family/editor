import"./chunk-DAQOROHW.js";var t=`import {isPlatformServer} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiExpand, TuiIcon} from '@taiga-ui/core';
import {
    provideTuiEditor,
    TuiEditor,
    TuiEditorSocket,
    TuiEditorTool,
} from '@taiga-ui/editor';
import {TuiAccordion} from '@taiga-ui/kit';

import {ExampleTuiEmbedTool} from './embed-tool/embed-tool.component';

@Component({
    imports: [
        ExampleTuiEmbedTool,
        ReactiveFormsModule,
        TuiAccordion,
        TuiEditor,
        TuiEditorSocket,
        TuiExpand,
        TuiIcon,
        TuiItem,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    exportAs: 'iframe-example',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideTuiEditor({iframe: true})],
})
export default class Example {
    private readonly isNotStatic =
        inject(WA_IS_E2E) || isPlatformServer(inject(PLATFORM_ID));

    protected readonly isE2E = inject(WA_IS_E2E);
    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected readonly control = new FormControl(
        this.isNotStatic
            ? ''
            : \`
        <p>Here is an online IDE:</p>
        <iframe
         src="https://codepen.io/mehdinajafi/embed/LYyqNqR?default-tab=html$%2Cresult&editable=true"
         height="375"
         width="100%"
         scrolling="no"
         frameborder="no"
         loading="lazy"
         allowtransparency="true"
         data-type="iframe-editor"
         allowfullscreen="true">
        </iframe>
        </iframe>
        <p>Here is a media player:</p>
        <iframe
            src="https://bandcamp.com/EmbeddedPlayer/album=2219061201/size=small/bgcol=ffffff/linkcol=63b2cc/transparent=true/"
            height="42"
            width="100%"
            data-type="iframe-editor">
        </iframe>
        <p></p>
    \`,
        Validators.required,
    );
}
`;export{t as default};
