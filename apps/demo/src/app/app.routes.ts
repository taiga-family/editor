import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TuiDemoPath} from './constants/demo-path';

export const appRoutes: Routes = [
    {
        path: TuiDemoPath.StarterKit,
        loadChildren: async () =>
            (await import(`./pages/starter/editor-starter.module`))
                .TuiEditorStarterPageModule,
        data: {
            title: `StarterKit`,
        },
    },
    {
        path: TuiDemoPath.Installation,
        loadChildren: async () =>
            (await import(`./pages/installation/installation.module`))
                .TuiInstallationPageModule,
        data: {
            title: `Core concepts`,
        },
    },
    {
        path: TuiDemoPath.Changelog,
        loadChildren: async () =>
            (await import(`./pages/changelog/changelog.module`)).TuiChangelogModule,
        data: {
            title: `Changelog`,
        },
    },
    {
        path: `**`,
        redirectTo: TuiDemoPath.StarterKit,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            initialNavigation: `enabledBlocking`,
            relativeLinkResolution: `corrected`,
            scrollPositionRestoration: `enabled`,
        }),
    ],
    exports: [RouterModule],
})
export class TuiAppRoutingModule {}
