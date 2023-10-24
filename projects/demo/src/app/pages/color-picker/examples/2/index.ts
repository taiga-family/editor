import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
    selector: 'tui-color-picker-example-2',
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
