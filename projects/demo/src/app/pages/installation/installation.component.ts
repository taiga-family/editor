import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'installation-page',
    templateUrl: './installation.template.html',
    styleUrls: ['./installation.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstallationPageComponent {}
