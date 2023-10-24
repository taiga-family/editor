import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiLinkModule, TuiSvgModule} from '@taiga-ui/core';

import {TuiLogoComponent} from './logo.component';

@NgModule({
    imports: [TuiLinkModule, RouterModule, TuiSvgModule],
    declarations: [TuiLogoComponent],
    exports: [TuiLogoComponent],
})
export class TuiLogoModule {}
