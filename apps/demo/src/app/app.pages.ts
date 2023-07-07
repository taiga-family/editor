import {TuiDocPages} from '@taiga-ui/addon-doc';

import {TuiDemoPath} from './constants';

export const DEMO_PAGES: TuiDocPages = [
    {
        section: `Editor`,
        title: `Starter Kit`,
        route: TuiDemoPath.StarterKit,
        keywords: `editor, setup, starter kit, wysiwyg, редактор, текст, html, rich, text`,
    },
    {
        section: `Editor`,
        title: `Installation`,
        route: TuiDemoPath.Installation,
        keywords: `installation`,
    },
    {
        section: `Editor`,
        title: `ColorPicker`,
        route: TuiDemoPath.ColorPicker,
        keywords: `цвет, выбор, градиент, gradient, палитра, input, inputcolor`,
    },
    {
        section: `Editor`,
        title: `Font`,
        route: TuiDemoPath.Font,
        keywords: `editor, font, wysiwyg, редактор, текст, html, rich, text`,
    },
    {
        section: `Editor`,
        title: `Anchors`,
        route: TuiDemoPath.Anchors,
        keywords: `editor, anchors, wysiwyg, редактор, текст, html, rich, text`,
    },
    {
        section: `Editor`,
        title: `Groups`,
        route: TuiDemoPath.Groups,
        keywords: `editor, draggable, nested, hilite, groups, wysiwyg, редактор, текст, html, rich, text`,
    },
    {
        section: `Editor`,
        title: `Focus`,
        route: TuiDemoPath.Focus,
        keywords: `editor, focus, focusable, wysiwyg, редактор, фокус, html, rich, text`,
    },
    {
        section: `Editor`,
        title: `Custom tool`,
        subPages: [
            {
                section: `Editor`,
                title: `Paste emoji`,
                keywords: `editor, custom, tool, emoji, wysiwyg, редактор, текст, html, rich, text`,
                route: `/${TuiDemoPath.PasteEmojiTool}`,
            },
            {
                section: `Editor`,
                title: `Color picker`,
                keywords: `editor, custom color picker, color picker, tool, wysiwyg, редактор, выбрать цвет, html, rich, text`,
                route: `/${TuiDemoPath.ColorPickerTool}`,
            },
            {
                section: `Editor`,
                title: `Paste image`,
                keywords: `editor, paste image, tool, wysiwyg, редактор, текст, html, rich, text`,
                route: `/${TuiDemoPath.PasteImageTool}`,
            },
            {
                section: `Editor`,
                title: `Font size tool`,
                keywords: `editor, custom font size tool, tool, wysiwyg, редактор, выбрать размер, html, rich, text`,
                route: `/${TuiDemoPath.Font}`,
                fragment: `custom-size-tool`,
            },
        ],
    },
    {
        section: `Editor`,
        title: `Highlight`,
        subPages: [
            {
                section: `Editor`,
                title: `Mark text`,
                keywords: `editor, highlight, text, wysiwyg, редактор, текст, подсветка, html, rich, text`,
                route: `/${TuiDemoPath.HighlightText}`,
            },
            {
                section: `Editor`,
                title: `Code block`,
                keywords: `editor, highlight, code, block, pre, wysiwyg, редактор, текст, подсветка, html, rich, text`,
                route: `/${TuiDemoPath.HighlightCode}`,
            },
        ],
    },
    {
        section: `Editor`,
        title: `Processing`,
        subPages: [
            {
                section: `Editor`,
                title: `Legacy html`,
                keywords: `editor, processing, content, legacy html, wysiwyg, редактор, текст, html, rich, text`,
                route: `/${TuiDemoPath.ProcessingLegacyHtml}`,
            },
            {
                section: `Editor`,
                title: `Cleanup html`,
                keywords: `editor, processing, content, cleanup html, wysiwyg, редактор, текст, html, rich, text`,
                route: `/${TuiDemoPath.ProcessingCleanupHtml}`,
            },
            {
                section: `Editor`,
                title: `Markdown`,
                keywords: `editor, markdown, wysiwyg, редактор, текст, html, rich, text`,
                route: `/${TuiDemoPath.ProcessingMarkdown}`,
            },
        ],
    },
    {
        section: `Editor`,
        title: `Images`,
        subPages: [
            {
                section: `Editor`,
                title: `Resizable`,
                keywords: `editor, resizable, image, wysiwyg, редактор, текст, html, rich, text`,
                route: `/${TuiDemoPath.ImagesResizable}`,
            },
            {
                section: `Editor`,
                title: `Preview images`,
                keywords: `editor, preview, images, wysiwyg, редактор, текст, html, rich, text`,
                route: `/${TuiDemoPath.ImagesPreview}`,
            },
            {
                section: `Editor`,
                title: `Upload`,
                keywords: `editor, upload, images, wysiwyg, редактор, текст, html, rich, text`,
                route: `/${TuiDemoPath.ImagesUpload}`,
            },
        ],
    },
    {
        section: `Editor`,
        title: `Embed`,
        subPages: [
            {
                section: `Editor`,
                title: `Youtube`,
                keywords: `editor, embed, video player, audio player, youtube, wysiwyg, редактор, плейер, плеер, ютуб, текст, html, rich, text`,
                route: `/${TuiDemoPath.EmbedYoutube}`,
            },
            {
                section: `Editor`,
                title: `Iframe`,
                keywords: `editor, embed, iframe, wysiwyg, редактор, айфрейм, html, rich, text`,
                route: `/${TuiDemoPath.EmbedIframe}`,
            },
            {
                section: `Editor`,
                title: `HTML5`,
                keywords: `editor, embed, video player, audio player, html5, wysiwyg, редактор, плеер, html, rich, text`,
                route: `/${TuiDemoPath.EmbedHtml5}`,
            },
        ],
    },
    {
        section: `Other`,
        title: `Changelog`,
        route: TuiDemoPath.Changelog,
        keywords: `release, change, changelog, archive, history`,
    },
];
