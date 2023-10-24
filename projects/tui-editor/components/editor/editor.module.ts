import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneModule, TuiItemModule} from '@taiga-ui/cdk';
import {TuiDropdownModule, TuiScrollbarModule, TuiWrapperModule} from '@taiga-ui/core';
import {TuiEditLinkModule} from '../edit-link';
import {TuiEditorSocketModule} from '../editor-socket';
import {TuiToolbarModule} from '../toolbar';
import {TuiTiptapEditorModule} from '../../directives';

import {TuiEditorComponent} from './editor.component';
import {TuiEditorPortalDirective} from './portal/editor-portal.directive';
import {TuiEditorPortalHostComponent} from './portal/editor-portal-host.component';

@NgModule({
    declarations: [
        TuiEditorComponent,
        TuiEditorPortalHostComponent,
        TuiEditorPortalDirective,
    ],
    imports: [
        TuiItemModule,
        CommonModule,
        TuiToolbarModule,
        TuiWrapperModule,
        TuiScrollbarModule,
        TuiEditLinkModule,
        TuiActiveZoneModule,
        TuiDropdownModule,
        TuiTiptapEditorModule,
        TuiEditorSocketModule,
    ],
    exports: [TuiEditorComponent],
})
export class TuiEditorModule {}
