import type {Routes} from '@angular/router';
import {tuiProvideRoutePageTab as route} from '@taiga-ui/addon-doc';

import {TuiDemoPath} from './shared/routes';

export const routes: Routes = [
    route({
        path: TuiDemoPath.StarterKit,
        loadComponent: async () => import('./pages/starter'),
        title: 'StarterKit',
    }),
    route({
        path: 'stackblitz',
        loadComponent: async () => import('./pages/stackblitz/starter'),
        title: 'Stackblitz Starter',
    }),
    route({
        path: TuiDemoPath.ColorPicker,
        loadComponent: async () => import('./pages/color-picker'),
        title: 'Input color picker',
    }),
    route({
        path: TuiDemoPath.Font,
        loadComponent: async () => import('./pages/font'),
        title: 'Font',
    }),
    route({
        path: TuiDemoPath.Anchors,
        loadComponent: async () => import('./pages/anchors'),
        title: 'Anchors',
    }),
    route({
        path: TuiDemoPath.Appearance,
        loadComponent: async () => import('./pages/appearance'),
        title: 'Appearance',
    }),
    route({
        path: TuiDemoPath.Checkbox,
        loadComponent: async () => import('./pages/checkbox'),
        title: 'Checkbox',
    }),
    route({
        path: TuiDemoPath.Mention,
        loadComponent: async () => import('./pages/mention'),
        title: 'Mention',
    }),
    route({
        path: TuiDemoPath.Focus,
        loadComponent: async () => import('./pages/focus'),
        title: 'Focus',
    }),
    route({
        path: TuiDemoPath.Groups,
        loadComponent: async () => import('./pages/groups'),
        title: 'Groups',
    }),
    route({
        path: TuiDemoPath.UploadFiles,
        loadComponent: async () => import('./pages/upload-files'),
        title: 'Upload files',
    }),
    route({
        path: TuiDemoPath.PasteEmojiTool,
        loadComponent: async () => import('./pages/custom-tool/paste-emoji'),
        title: 'Editor — Paste emoji custom tool',
    }),
    route({
        path: TuiDemoPath.ColorPickerTool,
        loadComponent: async () => import('./pages/custom-tool/color-picker'),
        title: 'Editor — Color picker custom tool',
    }),
    route({
        path: TuiDemoPath.PasteImageTool,
        loadComponent: async () => import('./pages/custom-tool/paste-image'),
        title: 'Editor — Paste image custom tool',
    }),
    route({
        path: TuiDemoPath.PasteImageTool,
        loadComponent: async () => import('./pages/custom-tool/paste-image'),
        title: 'Editor — Paste image custom tool',
    }),
    route({
        path: TuiDemoPath.HighlightText,
        loadComponent: async () => import('./pages/highlight/text'),
        title: 'Editor — Highlight text',
    }),
    route({
        path: TuiDemoPath.ProcessingLegacyHtml,
        loadComponent: async () => import('./pages/processing/legacy-html'),
        title: 'Editor — Legacy html',
    }),
    route({
        path: TuiDemoPath.ProcessingCleanupHtml,
        loadComponent: async () => import('./pages/processing/cleanup-html'),
        title: 'Editor — Cleanup html',
    }),
    route({
        path: TuiDemoPath.ProcessingMarkdown,
        loadComponent: async () => import('./pages/processing/markdown'),
        title: 'Editor — Markdown',
    }),
    route({
        path: TuiDemoPath.ProcessingMarkdownExtension,
        loadComponent: async () => import('./pages/processing/markdown-extension'),
        title: 'Editor — Markdown',
    }),
    route({
        path: TuiDemoPath.HighlightCode,
        loadComponent: async () => import('./pages/highlight/code'),
        title: 'Editor — Highlight code',
    }),
    route({
        path: TuiDemoPath.ImagesResizable,
        loadComponent: async () => import('./pages/images/resizable'),
        title: 'Editor  — Resizable images',
    }),
    route({
        path: TuiDemoPath.ImagesPreview,
        loadComponent: async () => import('./pages/images/preview'),
        title: 'Editor  — Preview images',
    }),
    route({
        path: TuiDemoPath.ImagesUpload,
        loadComponent: async () => import('./pages/images/upload'),
        title: 'Editor — Upload images',
    }),
    route({
        path: TuiDemoPath.EmbedYoutube,
        loadComponent: async () => import('./pages/embed/youtube'),
        title: 'Editor — YouTube',
    }),
    route({
        path: TuiDemoPath.EmbedIframe,
        loadComponent: async () => import('./pages/embed/iframe'),
        title: 'Editor — Iframe',
    }),
    route({
        path: TuiDemoPath.EmbedHtml5,
        loadComponent: async () => import('./pages/embed/html5'),
        title: 'Editor — HTML5',
    }),
    route({
        path: TuiDemoPath.ToolbarBottom,
        loadComponent: async () => import('./pages/toolbar/bottom'),
        title: 'Editor — Toolbar',
    }),
    route({
        path: TuiDemoPath.ToolbarFloating,
        loadComponent: async () => import('./pages/toolbar/floating'),
        title: 'Editor — Toolbar',
    }),
    {
        path: '**',
        redirectTo: TuiDemoPath.StarterKit,
    },
];
