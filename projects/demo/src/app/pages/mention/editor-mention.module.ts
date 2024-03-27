import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiDataListModule} from '@taiga-ui/core';
import {TuiAvatarModule} from '@taiga-ui/kit';
import {TuiEditorModule, TuiEditorSocketModule} from '@tinkoff/tui-editor';

import {ExampleTuiEditorMentionComponent} from './editor-mention.component';
import {TuiEditorMentionExample1} from './examples/1';

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
    ],
    declarations: [TuiEditorMentionExample1, ExampleTuiEditorMentionComponent],
})
export class ExampleTuiEditorMentionModule {}
