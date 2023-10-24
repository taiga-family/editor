import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiSvgModule,
} from '@taiga-ui/core';

import {TuiEditorModule, TuiEditorSocketModule} from '../../../../../../tui-editor';
import {ExampleTuiEditorEmbedComponent} from './editor-embed-youtube.component';
import {TuiEditorEmbedYoutubeExample1} from './examples/1';
import {ExampleTuiYoutubeToolModule} from './examples/1/youtube-tool/youtube-tool.module';

@NgModule({
    imports: [
        CommonModule,
        TuiActiveZoneModule,
        TuiSvgModule,
        TuiLinkModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiAddonDocModule,
        FormsModule,
        ReactiveFormsModule,
        TuiEditorModule,
        TuiEditorSocketModule,
        ExampleTuiYoutubeToolModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiEditorEmbedComponent)),
    ],
    declarations: [ExampleTuiEditorEmbedComponent, TuiEditorEmbedYoutubeExample1],
})
export class ExampleTuiEditorEmbedYoutubeModule {}
