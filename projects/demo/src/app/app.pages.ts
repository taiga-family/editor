import type {TuiDocPages} from '@taiga-ui/addon-doc';

import {TuiDemoPath} from './constants';

export const DEMO_PAGES: TuiDocPages = [
    {
        section: 'Documentation',
        title: 'Starter Kit',
        route: TuiDemoPath.StarterKit,
        keywords:
            'editor, setup, starter kit, wysiwyg, редактор, текст, html, rich, text',
    },
    {
        section: 'Documentation',
        title: 'Playground',
        keywords: 'reproduce, issue, bug, sandbox, playground, test, stackblitz',
        route: TuiDemoPath.Stackblitz,
    },
    {
        section: 'Documentation',
        title: 'Changelog',
        route: TuiDemoPath.Changelog,
        keywords: 'release, change, changelog, archive, history',
    },
    {
        section: 'Documentation',
        title: 'Contenteditable',
        route: TuiDemoPath.AngularContenteditableAccessor,
        keywords: 'contenteditable, accessor',
    },
    {
        section: 'Documentation',
        title: 'ColorPicker',
        route: TuiDemoPath.ColorPicker,
        keywords: 'цвет, выбор, градиент, gradient, палитра, input, inputcolor',
    },
    {
        section: 'Documentation',
        title: 'Font',
        route: TuiDemoPath.Font,
        keywords: 'editor, font, wysiwyg, редактор, текст, html, rich, text',
    },
    {
        section: 'Documentation',
        title: 'Anchors',
        route: TuiDemoPath.Anchors,
        keywords: 'editor, anchors, wysiwyg, редактор, текст, html, rich, text',
    },
    {
        section: 'Documentation',
        title: 'Checkbox',
        route: TuiDemoPath.Checkbox,
        keywords: 'editor, checkbox, wysiwyg, редактор, текст, html, rich, text',
    },
    {
        section: 'Documentation',
        title: 'Appearance',
        route: TuiDemoPath.Appearance,
        keywords: 'editor, appearance, wysiwyg, редактор, текст, html, rich, text',
    },
    {
        section: 'Documentation',
        title: 'Mention',
        route: TuiDemoPath.Mention,
        keywords: 'editor, mention, wysiwyg, редактор, текст, html, rich, text',
    },
    {
        section: 'Documentation',
        title: 'Groups',
        route: TuiDemoPath.Groups,
        keywords:
            'editor, draggable, nested, hilite, groups, wysiwyg, редактор, текст, html, rich, text',
    },
    {
        section: 'Documentation',
        title: 'Focus',
        route: TuiDemoPath.Focus,
        keywords: 'editor, focus, focusable, wysiwyg, редактор, фокус, html, rich, text',
    },
    {
        section: 'Documentation',
        title: 'Custom tool',
        subPages: [
            {
                section: 'Documentation',
                title: 'Paste emoji',
                keywords:
                    'editor, custom, tool, emoji, wysiwyg, редактор, текст, html, rich, text',
                route: `/${TuiDemoPath.PasteEmojiTool}`,
            },
            {
                section: 'Documentation',
                title: 'Color picker',
                keywords:
                    'editor, custom color picker, color picker, tool, wysiwyg, редактор, выбрать цвет, html, rich, text',
                route: `/${TuiDemoPath.ColorPickerTool}`,
            },
            {
                section: 'Documentation',
                title: 'Paste image',
                keywords:
                    'editor, paste image, tool, wysiwyg, редактор, текст, html, rich, text',
                route: `/${TuiDemoPath.PasteImageTool}`,
            },
            {
                section: 'Documentation',
                title: 'Font size tool',
                keywords:
                    'editor, custom font size tool, tool, wysiwyg, редактор, выбрать размер, html, rich, text',
                route: `/${TuiDemoPath.Font}`,
                fragment: 'custom-size-tool',
            },
        ],
    },
    {
        section: 'Documentation',
        title: 'Highlight',
        subPages: [
            {
                section: 'Documentation',
                title: 'Mark text',
                keywords:
                    'editor, highlight, text, wysiwyg, редактор, текст, подсветка, html, rich, text',
                route: `/${TuiDemoPath.HighlightText}`,
            },
            {
                section: 'Documentation',
                title: 'Code block',
                keywords:
                    'editor, highlight, code, block, pre, wysiwyg, редактор, текст, подсветка, html, rich, text',
                route: `/${TuiDemoPath.HighlightCode}`,
            },
        ],
    },
    {
        section: 'Documentation',
        title: 'Processing',
        subPages: [
            {
                section: 'Documentation',
                title: 'Legacy html',
                keywords:
                    'editor, processing, content, legacy html, wysiwyg, редактор, текст, html, rich, text',
                route: `/${TuiDemoPath.ProcessingLegacyHtml}`,
            },
            {
                section: 'Documentation',
                title: 'Cleanup html',
                keywords:
                    'editor, processing, content, cleanup html, wysiwyg, редактор, текст, html, rich, text',
                route: `/${TuiDemoPath.ProcessingCleanupHtml}`,
            },
        ],
    },
    {
        section: 'Documentation',
        title: 'Markdown',
        subPages: [
            {
                section: 'Documentation',
                title: 'Extension',
                keywords: 'editor, markdown, wysiwyg, редактор, текст, html, rich, text',
                route: `/${TuiDemoPath.ProcessingMarkdownExtension}`,
            },
            {
                section: 'Documentation',
                title: 'Custom parsing',
                keywords: 'editor, markdown, wysiwyg, редактор, текст, html, rich, text',
                route: `/${TuiDemoPath.ProcessingMarkdown}`,
            },
        ],
    },
    {
        section: 'Documentation',
        title: 'Images',
        subPages: [
            {
                section: 'Documentation',
                title: 'Resizable',
                keywords:
                    'editor, resizable, image, wysiwyg, редактор, текст, html, rich, text',
                route: `/${TuiDemoPath.ImagesResizable}`,
            },
            {
                section: 'Documentation',
                title: 'Preview images',
                keywords:
                    'editor, preview, images, wysiwyg, редактор, текст, html, rich, text',
                route: `/${TuiDemoPath.ImagesPreview}`,
            },
            {
                section: 'Documentation',
                title: 'Upload',
                keywords:
                    'editor, upload, images, wysiwyg, редактор, текст, html, rich, text',
                route: `/${TuiDemoPath.ImagesUpload}`,
            },
        ],
    },
    {
        section: 'Documentation',
        title: 'Embed',
        subPages: [
            {
                section: 'Documentation',
                title: 'Youtube',
                keywords:
                    'editor, embed, video player, audio player, youtube, wysiwyg, редактор, плейер, плеер, ютуб, текст, html, rich, text',
                route: `/${TuiDemoPath.EmbedYoutube}`,
            },
            {
                section: 'Documentation',
                title: 'Iframe',
                keywords:
                    'editor, embed, iframe, wysiwyg, редактор, айфрейм, html, rich, text',
                route: `/${TuiDemoPath.EmbedIframe}`,
            },
            {
                section: 'Documentation',
                title: 'HTML5',
                keywords:
                    'editor, embed, video player, audio player, html5, wysiwyg, редактор, плеер, html, rich, text',
                route: `/${TuiDemoPath.EmbedHtml5}`,
            },
        ],
    },
    {
        section: 'Documentation',
        title: 'Toolbar',
        subPages: [
            {
                section: 'Documentation',
                title: 'Align bottom',
                keywords:
                    'editor, toolbar, bottom, wysiwyg, редактор, текст, подсветка, html, rich, text',
                route: `/${TuiDemoPath.ToolbarBottom}`,
            },
            {
                section: 'Documentation',
                title: 'Floating',
                keywords:
                    'editor, toolbar, floating, wysiwyg, редактор, текст, подсветка, html, rich, text',
                route: `/${TuiDemoPath.ToolbarFloating}`,
            },
        ],
    },
];
