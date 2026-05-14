import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiOption} from '@taiga-ui/core';
import {type TuiEditorFontOptionContext} from '@taiga-ui/editor';
import {injectContext} from '@taiga-ui/polymorpheus';

@Component({
    imports: [TuiItem, TuiOption],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FontOption {
    protected readonly ctx = injectContext<TuiEditorFontOptionContext>();
}
