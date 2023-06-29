import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DemoPath} from './constants/demo-path';

export const appRoutes: Routes = [
    // Getting started
    {
        path: DemoPath.WhatIsMaskito,
        loadChildren: async () =>
            import(`./pages/documentation/what-is-maskito/what-is-maskito.module`).then(
                m => m.WhatIsMaskitoDocPageModule,
            ),
        data: {
            title: `What is Maskito?`,
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
        redirectTo: DemoPath.WhatIsMaskito,
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
