import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiLink} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Component({
    selector: 'logo',
    imports: [TuiLink],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLogo {}

export const TUI_LOGO_CONTENT = new PolymorpheusComponent(TuiLogo);
