import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiTextfield, FormsModule, MaskitoDirective, TuiIcon, NgIf],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
    protected readonly mask = {mask: ['#', ...new Array(6).fill(/[0-9a-f]/i)]};

    protected value = '#ffdd2d';
}
