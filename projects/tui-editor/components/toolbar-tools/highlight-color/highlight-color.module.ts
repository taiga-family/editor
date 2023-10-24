import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneModule, TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDropdownModule,
    TuiHintModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';
import {TuiPaletteModule} from '../../color-selector';

import {TuiHighlightColorComponent} from './highlight-color.component';

@NgModule({
    imports: [
        CommonModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiPaletteModule,
        TuiHintModule,
        TuiDropdownModule,
        TuiActiveZoneModule,
        TuiLetModule,
    ],
    declarations: [TuiHighlightColorComponent],
    exports: [TuiHighlightColorComponent],
})
export class TuiHighlightColorModule {}
