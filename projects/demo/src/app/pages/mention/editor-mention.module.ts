import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiAutoFocusModule} from '@taiga-ui/cdk';
import {TuiDataListModule} from '@taiga-ui/core';
import {TuiAvatarModule, TuiInitialsModule} from '@taiga-ui/experimental';
import {TuiEditorModule, TuiEditorSocketModule} from '@tbank/tui-editor';

import {ExampleTuiEditorMentionComponent} from './editor-mention.component';
import {TuiEditorMentionExample1} from './examples/1';
import {MentionsComponent} from './examples/1/mention';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        ReactiveFormsModule,
        TuiEditorModule,
        TuiEditorSocketModule,
        TuiDataListModule,
        TuiAvatarModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiEditorMentionComponent)),
        TuiAutoFocusModule,
        TuiInitialsModule,
    ],
    declarations: [
        TuiEditorMentionExample1,
        ExampleTuiEditorMentionComponent,
        MentionsComponent,
    ],
})
export class ExampleTuiEditorMentionModule {}
