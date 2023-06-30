import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DemoPath} from './constants/demo-path';

export const appRoutes: Routes = [
    // Getting started
    {
        path: DemoPath.WhatIsTuiEditor,
        loadChildren: async () =>
            import(
                `./pages/documentation/what-is-tui-editor/what-is-tui-editor.module`
            ).then(m => m.WhatIsTuiEditorPageModule),
        data: {
            title: `What is tui-editor?`,
        },
    },
    // Core concepts
    {
        path: DemoPath.CoreConceptsOverview,
        loadChildren: async () =>
            import(
                `./pages/documentation/core-concepts-overview/core-concepts-overview.module`
            ).then(m => m.CoreConceptsOverviewDocPageModule),
        data: {
            title: `Core concepts`,
        },
    },
    {
        path: DemoPath.Changelog,
        loadChildren: async () =>
            import(`./pages/documentation/changelog/changelog.module`).then(
                m => m.ChangelogModule,
            ),
        data: {
            title: `Changelog`,
        },
    },
    {
        path: '**',
        redirectTo: DemoPath.WhatIsTuiEditor,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            initialNavigation: 'enabledBlocking',
            relativeLinkResolution: 'corrected',
            scrollPositionRestoration: `enabled`,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
