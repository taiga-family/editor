import"./chunk-DAQOROHW.js";var t=`import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {provideTuiEditor, TuiEditor} from '@taiga-ui/editor';

@Component({
    imports: [ReactiveFormsModule, TuiEditor],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideTuiEditor()],
})
export default class Example {
    protected readonly control = new FormControl('');
    protected readonly builtInTools = [];
}
`;export{t as default};
