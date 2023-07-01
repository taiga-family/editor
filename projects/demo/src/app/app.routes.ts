import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DemoPath} from './constants/demo-path';

export const appRoutes: Routes = [
    // Getting started
    {
        path: DemoPath.Introduction,
        loadChildren: async () =>
            import(`./pages/introduction/introduction.module`).then(
                m => m.IntroductionPageModule,
            ),
        data: {
            title: `What is tui-editor?`,
        },
    },
    // Core concepts
    {
        path: DemoPath.Installation,
        loadChildren: async () =>
            import(`./pages/installation/installation.module`).then(
                m => m.InstallationPageModule,
            ),
        data: {
            title: `Core concepts`,
        },
    },
    {
        path: DemoPath.Changelog,
        loadChildren: async () =>
            import(`./pages/changelog/changelog.module`).then(m => m.ChangelogModule),
        data: {
            title: `Changelog`,
        },
    },
    {
        path: '**',
        redirectTo: DemoPath.Introduction,
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
