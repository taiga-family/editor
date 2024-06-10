import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaskitoModule} from '@maskito/angular';
import {TuiSvgComponent} from '@taiga-ui/core';
import {
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiSvgComponent,
        FormsModule,
        TuiInputModule,
        MaskitoModule,
        TuiTextfieldControllerModule,
        TuiWrapperModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
    protected readonly mask = {mask: ['#', ...new Array(6).fill(/[0-9a-f]/i)]};

    protected value = '#ffdd2d';
}
