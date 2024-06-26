import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiIcon, TuiLink} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector: 'logo',
    imports: [RouterLink, TuiLink, TuiIcon],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLogo {}

export const TUI_LOGO_CONTENT = new PolymorpheusComponent(TuiLogo);
