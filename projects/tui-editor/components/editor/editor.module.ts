import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneModule, TuiItemModule} from '@taiga-ui/cdk';
import {TuiDropdownModule, TuiScrollbarModule, TuiWrapperModule} from '@taiga-ui/core';
import {TuiEditLinkModule} from '@tbank/tui-editor/components/edit-link';
import {TuiEditorSocketModule} from '@tbank/tui-editor/components/editor-socket';
import {TuiToolbarModule} from '@tbank/tui-editor/components/toolbar';
import {TuiTiptapEditorModule} from '@tbank/tui-editor/directives';

import {TuiDropdownToolbarDirective} from './dropdown/dropdown-toolbar.directive';
import {TuiEditorComponent} from './editor.component';
import {TuiEditorPortalDirective} from './portal/editor-portal.directive';
import {TuiEditorPortalHostComponent} from './portal/editor-portal-host.component';

@NgModule({
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
    declarations: [
        TuiEditorComponent,
        TuiEditorPortalHostComponent,
        TuiDropdownToolbarDirective,
        TuiEditorPortalDirective,
    ],
    exports: [TuiEditorComponent],
})
export class TuiEditorModule {}
