import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiLink} from '@taiga-ui/core';
import {TuiSvgComponent} from '@taiga-ui/legacy';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector: 'logo',
    imports: [TuiSvgComponent, RouterLink, TuiLink],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLogo {}

export const TUI_LOGO_CONTENT = new PolymorpheusComponent(TuiLogo);
