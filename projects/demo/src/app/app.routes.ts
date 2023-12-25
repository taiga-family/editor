import type {Routes} from '@angular/router';
import {tuiProvideRoutePageTab as route} from '@taiga-ui/addon-doc';

import {TuiDemoPath} from './constants/demo-path';

export const routes: Routes = [
    route({
        path: TuiDemoPath.StarterKit,
        loadComponent: async () => import('./pages/starter/editor-starter.component'),
        title: 'StarterKit',
    }),
    route({
        path: 'stackblitz',
        loadComponent: async () =>
            import('./pages/stackblitz/starter/stackblitz-starter.component'),
        title: 'Stackblitz Starter',
    }),
    route({
        path: TuiDemoPath.ColorPicker,
        loadComponent: async () =>
            import('./pages/color-picker/editor-input-color-picker.component'),
        title: 'Input color picker',
    }),
    route({
        path: TuiDemoPath.AngularContenteditableAccessor,
        loadComponent: async () =>
            import(
                './pages/angular-contenteditable-accessor/angular-contenteditable-accessor.component'
            ),
        title: 'Contenteditable accessor',
    }),
    route({
        path: TuiDemoPath.Font,
        loadComponent: async () => import('./pages/font/editor-font.component'),
        title: 'Font',
    }),
    route({
        path: TuiDemoPath.Anchors,
        loadComponent: async () => import('./pages/anchors/editor-anchors.component'),
        title: 'Anchors',
    }),
    route({
        path: TuiDemoPath.Focus,
        loadComponent: async () => import('./pages/focus/editor-focus.component'),
        title: 'Focus',
    }),
    route({
        path: TuiDemoPath.Groups,
        loadComponent: async () => import('./pages/groups/editor-groups.component'),
        title: 'Groups',
    }),
    route({
        path: TuiDemoPath.UploadFiles,
        loadComponent: async () =>
            import('./pages/upload-files/editor-upload-files.component'),
        title: 'Upload files',
    }),
    route({
        path: TuiDemoPath.PasteEmojiTool,
        loadComponent: async () =>
            import('./pages/custom-tool/paste-emoji/editor-paste-emoji.component'),
        title: 'Editor — Paste emoji custom tool',
    }),
    route({
        path: TuiDemoPath.ColorPickerTool,
        loadComponent: async () =>
            import('./pages/custom-tool/color-picker/editor-color-picker.component'),
        title: 'Editor — Color picker custom tool',
    }),
    route({
        path: TuiDemoPath.PasteImageTool,
        loadComponent: async () =>
            import('./pages/custom-tool/paste-image/editor-paste-image-tool.component'),
        title: 'Editor — Paste image custom tool',
    }),
    route({
        path: TuiDemoPath.PasteImageTool,
        loadComponent: async () =>
            import('./pages/custom-tool/paste-image/editor-paste-image-tool.component'),
        title: 'Editor — Paste image custom tool',
    }),
    route({
        path: TuiDemoPath.HighlightText,
        loadComponent: async () =>
            import('./pages/highlight/text/editor-mark-text.component'),
        title: 'Editor — Highlight text',
    }),
    route({
        path: TuiDemoPath.ProcessingLegacyHtml,
        loadComponent: async () =>
            import('./pages/processing/legacy-html/editor-legacy-html.component'),
        title: 'Editor — Legacy html',
    }),
    route({
        path: TuiDemoPath.ProcessingCleanupHtml,
        loadComponent: async () =>
            import('./pages/processing/cleanup-html/editor-cleanup-html.component'),
        title: 'Editor — Cleanup html',
    }),
    route({
        path: TuiDemoPath.ProcessingMarkdown,
        loadComponent: async () =>
            import('./pages/processing/markdown/editor-markdown.component'),
        title: 'Editor — Markdown',
    }),
    route({
        path: TuiDemoPath.HighlightCode,
        loadComponent: async () =>
            import('./pages/highlight/code/editor-code-block.component'),
        title: 'Editor — Highlight code',
    }),
    route({
        path: TuiDemoPath.ImagesResizable,
        loadComponent: async () =>
            import('./pages/images/resizable/editor-resizable-images.component'),
        title: 'Editor  — Resizable images',
    }),
    route({
        path: TuiDemoPath.ImagesPreview,
        loadComponent: async () =>
            import('./pages/images/preview/editor-preview-images.component'),
        title: 'Editor  — Preview images',
    }),
    route({
        path: TuiDemoPath.ImagesUpload,
        loadComponent: async () =>
            import('./pages/images/upload/editor-upload-images.component'),
        title: 'Editor — Upload images',
    }),
    route({
        path: TuiDemoPath.EmbedYoutube,
        loadComponent: async () =>
            import('./pages/embed/youtube/editor-embed-youtube.component'),
        title: 'Editor — YouTube',
    }),
    route({
        path: TuiDemoPath.EmbedIframe,
        loadComponent: async () =>
            import('./pages/embed/iframe/editor-embed-iframe.component'),
        title: 'Editor — Iframe',
    }),
    route({
        path: TuiDemoPath.EmbedHtml5,
        loadComponent: async () =>
            import('./pages/embed/html5/editor-embed-html5.component'),
        title: 'Editor — HTML5',
    }),
    route({
        path: TuiDemoPath.Changelog,
        loadComponent: async () => import('./pages/changelog/editor-changelog.component'),
        title: 'Changelog',
    }),
    {
        path: '**',
        redirectTo: TuiDemoPath.StarterKit,
    },
];
