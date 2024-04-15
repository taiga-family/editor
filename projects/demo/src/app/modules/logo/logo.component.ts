import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiLinkDirective, TuiSvgComponent} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    selector: 'logo',
    imports: [TuiSvgComponent, RouterLink, TuiLinkDirective],
    templateUrl: './logo.template.html',
    styleUrls: ['./logo.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLogoComponent {}

export const TUI_LOGO_CONTENT = new PolymorpheusComponent(TuiLogoComponent);
