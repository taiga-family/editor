import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'installation-page',
    templateUrl: './editor-installation.template.html',
    styleUrls: ['./editor-installation.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInstallationPageComponent {}
