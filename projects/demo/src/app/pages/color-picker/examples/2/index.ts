import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiHostedDropdownModule} from '@taiga-ui/core';
import {TuiColorSelectorComponent} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    selector: 'tui-color-picker-example-2',
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
export class TuiColorPickerExample2 {
    color = '#ffdd2d';

    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}

    get background(): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(this.color);
    }
}
