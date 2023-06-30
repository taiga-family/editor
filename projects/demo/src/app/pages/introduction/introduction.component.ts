import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'introduction-page',
    templateUrl: './introduction.template.html',
    styleUrls: ['./introduction.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroductionPageComponent {}
