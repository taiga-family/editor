import {TuiDocPages} from '@taiga-ui/addon-doc';

import {TuiDemoPath} from '../constants';

export const DEMO_PAGES: TuiDocPages = [
    {
        section: `Editor`,
        title: `Starter Kit`,
        route: TuiDemoPath.StarterKit,
        keywords: `getting, started, introduction, starter, kit, api`,
    },
    {
        section: `Editor`,
        title: `Installation`,
        route: TuiDemoPath.Installation,
        keywords: `installation`,
    },
    {
        section: `Other`,
        title: `Changelog`,
        route: TuiDemoPath.Changelog,
        keywords: `changelog`,
    },
];
