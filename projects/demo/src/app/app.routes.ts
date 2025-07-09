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
        path: TuiDemoPath.Options,
        loadComponent: async () => import('./pages/options'),
        title: 'ParseOptions',
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
        path: TuiDemoPath.Details,
        loadComponent: async () => import('./pages/details'),
        title: 'Details',
    }),
    route({
        path: TuiDemoPath.CharacterCounter,
        loadComponent: async () => import('./pages/character-counter'),
        title: 'Character counter',
    }),
    route({
        path: TuiDemoPath.SlashCommand,
        loadComponent: async () => import('./pages/slash'),
        title: 'Slash commands',
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
        path: TuiDemoPath.TableOfContents,
        loadComponent: async () => import('./pages/table-of-contents'),
        title: 'Table of Contents',
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
        path: TuiDemoPath.UploadImages,
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
        path: TuiDemoPath.EmbedPDF,
        loadComponent: async () => import('./pages/embed/pdf'),
        title: 'Editor — PDF',
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
    route({
        path: TuiDemoPath.ToolbarShared,
        loadComponent: async () => import('./pages/toolbar/shared'),
        title: 'Editor — Toolbar',
    }),
    route({
        path: TuiDemoPath.ToolbarCustom,
        loadComponent: async () => import('./pages/toolbar/custom'),
        title: 'Editor — Toolbar',
    }),
    {
        path: '**',
        redirectTo: TuiDemoPath.StarterKit,
    },
];
