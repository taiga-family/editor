import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import type {SafeStyle} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiHostedDropdownModule} from '@taiga-ui/core';
import {TuiColorSelectorComponent} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    imports: [
        TuiActiveZoneModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiColorSelectorComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExampleComponent {
    private readonly sanitizer = inject(DomSanitizer);

    protected color = '#ffdd2d';

    protected get background(): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(this.color);
    }
}
