import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoModule} from '@maskito/angular';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiColorSelectorModule} from '@tinkoff/tui-editor/components/color-selector';

import {TuiInputColorComponent} from './input-color.component';

@NgModule({
    imports: [
        CommonModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiHostedDropdownModule,
        TuiColorSelectorModule,
        TuiActiveZoneModule,
        MaskitoModule,
    ],
    declarations: [TuiInputColorComponent],
    exports: [TuiInputColorComponent],
})
export class TuiInputColorModule {}
