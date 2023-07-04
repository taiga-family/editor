import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {MarkdownModule} from 'ngx-markdown';

import {TuiChangelogComponent} from './changelog.component';

@NgModule({
    imports: [
        CommonModule,
        MarkdownModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(TuiChangelogComponent)),
    ],
    declarations: [TuiChangelogComponent],
    exports: [TuiChangelogComponent],
})
export class TuiChangelogModule {}
