/* eslint-disable @typescript-eslint/quotes */
import type {Routes} from '@angular/router';

import {TuiDemoPath} from './constants/demo-path';

export const routes: Routes = [
    {
        path: TuiDemoPath.StarterKit,
        loadComponent: async () => import('./pages/starter/editor-starter.component'),
        children: [
            {
                path: ':tab',
                loadComponent: async () =>
                    import('./pages/starter/editor-starter.component'),
            },
        ],
        data: {
            title: 'StarterKit',
        },
    },
    {
        path: 'stackblitz',
        loadComponent: async () =>
            import('./pages/stackblitz/starter/stackblitz-starter.component'),
        data: {
            title: 'Stackblitz Starter',
        },
    },
    {
        path: TuiDemoPath.ColorPicker,
        loadComponent: async () =>
            import('./pages/color-picker/editor-input-color-picker.component'),
        children: [
            {
                path: ':tab',
                loadComponent: async () =>
                    import('./pages/color-picker/editor-input-color-picker.component'),
            },
        ],
        data: {
            title: 'Input color picker',
        },
    },
    {
        path: TuiDemoPath.AngularContenteditableAccessor,
        loadComponent: async () =>
            import(
                './pages/angular-contenteditable-accessor/angular-contenteditable-accessor.component'
            ),
        data: {
            title: 'Angular contenteditable accessor',
        },
    },
    {
        path: TuiDemoPath.Font,
        loadComponent: async () => import('./pages/font/editor-font.component'),
        data: {
            title: 'Font',
        },
    },
    {
        path: TuiDemoPath.Anchors,
        loadComponent: async () => import('./pages/anchors/editor-anchors.component'),
        data: {
            title: 'Anchors',
        },
    },
    {
        path: TuiDemoPath.Focus,
        loadComponent: async () => import('./pages/focus/editor-focus.component'),
        data: {
            title: 'Focus',
        },
    },
    {
        path: TuiDemoPath.Groups,
        loadComponent: async () => import('./pages/groups/editor-groups.component'),
        data: {
            title: 'Groups',
        },
    },
    {
        path: TuiDemoPath.UploadFiles,
        loadComponent: async () =>
            import('./pages/upload-files/editor-upload-files.component'),
        data: {
            title: 'Upload files',
        },
    },
    {
        path: TuiDemoPath.PasteEmojiTool,
        loadComponent: async () =>
            import('./pages/custom-tool/paste-emoji/editor-paste-emoji.component'),
        data: {
            title: 'Editor — Paste emoji custom tool',
        },
    },
    {
        path: TuiDemoPath.ColorPickerTool,
        loadComponent: async () =>
            import('./pages/custom-tool/color-picker/editor-color-picker.component'),
        data: {
            title: 'Editor — Color picker custom tool',
        },
    },
    {
        path: TuiDemoPath.PasteImageTool,
        loadComponent: async () =>
            import('./pages/custom-tool/paste-image/editor-paste-image-tool.component'),
        data: {
            title: 'Editor — Paste image custom tool',
        },
    },
    {
        path: TuiDemoPath.HighlightText,
        loadComponent: async () =>
            import('./pages/highlight/text/editor-mark-text.component'),
        data: {
            title: 'Editor — Highlight text',
        },
    },
    {
        path: TuiDemoPath.ProcessingLegacyHtml,
        loadComponent: async () =>
            import('./pages/processing/legacy-html/editor-legacy-html.component'),
        data: {
            title: 'Editor — Legacy html',
        },
    },
    {
        path: TuiDemoPath.ProcessingCleanupHtml,
        loadComponent: async () =>
            import('./pages/processing/cleanup-html/editor-cleanup-html.component'),
        data: {
            title: 'Editor — Cleanup html',
        },
    },
    {
        path: TuiDemoPath.ProcessingMarkdown,
        loadComponent: async () =>
            import('./pages/processing/markdown/editor-markdown.component'),
        data: {
            title: 'Editor — Markdown',
        },
    },
    {
        path: TuiDemoPath.HighlightCode,
        loadComponent: async () =>
            import('./pages/highlight/code/editor-code-block.component'),
        data: {
            title: 'Editor — Highlight code',
        },
    },
    {
        path: TuiDemoPath.ImagesResizable,
        loadComponent: async () =>
            import('./pages/images/resizable/editor-resizable-images.component'),
        data: {
            title: 'Editor  — Resizable images',
        },
    },
    {
        path: TuiDemoPath.ImagesPreview,
        loadComponent: async () =>
            import('./pages/images/preview/editor-preview-images.component'),
        data: {
            title: 'Editor  — Preview images',
        },
    },
    {
        path: TuiDemoPath.ImagesUpload,
        loadComponent: async () =>
            import('./pages/images/upload/editor-upload-images.component'),
        data: {
            title: 'Editor — Upload images',
        },
    },
    {
        path: TuiDemoPath.EmbedYoutube,
        loadComponent: async () =>
            import('./pages/embed/youtube/editor-embed-youtube.component'),
        data: {
            title: 'Editor — YouTube',
        },
    },
    {
        path: TuiDemoPath.EmbedIframe,
        loadComponent: async () =>
            import('./pages/embed/iframe/editor-embed-iframe.component'),
        data: {
            title: 'Editor — Iframe',
        },
    },
    {
        path: TuiDemoPath.EmbedHtml5,
        loadComponent: async () =>
            import('./pages/embed/html5/editor-embed-html5.component'),
        data: {
            title: 'Editor — HTML5',
        },
    },
    {
        path: TuiDemoPath.Changelog,
        loadComponent: async () => import('./pages/changelog/editor-changelog.component'),
        data: {
            title: 'Changelog',
        },
    },
    {
        path: '**',
        redirectTo: TuiDemoPath.StarterKit,
    },
];
