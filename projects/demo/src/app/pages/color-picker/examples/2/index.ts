import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import type {SafeStyle} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiHostedDropdownModule} from '@taiga-ui/core';
import {TuiColorSelector} from '@tbank/tui-editor';

@Component({
    standalone: true,
    imports: [
        TuiActiveZoneDirective,
        TuiHostedDropdownModule,
        TuiButtonDirective,
        TuiColorSelector,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
    private readonly sanitizer = inject(DomSanitizer);

    protected color = '#ffdd2d';

    protected get background(): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(this.color);
    }
}
