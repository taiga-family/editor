import {TuiDocPages} from '@taiga-ui/addon-doc';

import {TuiDemoPath} from './constants';

export const DEMO_PAGES: TuiDocPages = [
    {
        section: `Documentation`,
        title: `Starter Kit`,
        route: TuiDemoPath.StarterKit,
        keywords: `editor, setup, starter kit, wysiwyg, редактор, текст, html, rich, text`,
    },
    {
        section: `Documentation`,
        title: `Playground`,
        keywords: `reproduce, issue, bug, sandbox, playground, test, stackblitz`,
        route: TuiDemoPath.Stackblitz,
    },
    {
        section: `Documentation`,
        title: `Changelog`,
        route: TuiDemoPath.Changelog,
        keywords: `release, change, changelog, archive, history`,
    },
    {
        section: `Documentation`,
        title: `Contenteditable accessor`,
        route: TuiDemoPath.AngularContenteditableAccessor,
        keywords: `contenteditable, accessor, angular contenteditable accessor`,
    },
    {
        section: `Examples`,
        title: `ColorPicker`,
        route: TuiDemoPath.ColorPicker,
        keywords: `цвет, выбор, градиент, gradient, палитра, input, inputcolor`,
    },
    {
        section: `Examples`,
        title: `Font`,
        route: TuiDemoPath.Font,
        keywords: `editor, font, wysiwyg, редактор, текст, html, rich, text`,
    },
    {
        section: `Examples`,
        title: `Anchors`,
        route: TuiDemoPath.Anchors,
        keywords: `editor, anchors, wysiwyg, редактор, текст, html, rich, text`,
    },
    {
        section: `Examples`,
        title: `Groups`,
        route: TuiDemoPath.Groups,
        keywords: `editor, draggable, nested, hilite, groups, wysiwyg, редактор, текст, html, rich, text`,
    },
    {
        section: `Examples`,
        title: `Focus`,
        route: TuiDemoPath.Focus,
        keywords: `editor, focus, focusable, wysiwyg, редактор, фокус, html, rich, text`,
    },
    {
        section: `Examples`,
        title: `Custom tool`,
        subPages: [
            {
                section: `Examples`,
                title: `Paste emoji`,
                keywords: `editor, custom, tool, emoji, wysiwyg, редактор, текст, html, rich, text`,
                route: `/${TuiDemoPath.PasteEmojiTool}`,
            },
            {
                section: `Examples`,
                title: `Color picker`,
                keywords: `editor, custom color picker, color picker, tool, wysiwyg, редактор, выбрать цвет, html, rich, text`,
                route: `/${TuiDemoPath.ColorPickerTool}`,
            },
            {
                section: `Examples`,
                title: `Paste image`,
                keywords: `editor, paste image, tool, wysiwyg, редактор, текст, html, rich, text`,
                route: `/${TuiDemoPath.PasteImageTool}`,
            },
            {
                section: `Examples`,
                title: `Font size tool`,
                keywords: `editor, custom font size tool, tool, wysiwyg, редактор, выбрать размер, html, rich, text`,
                route: `/${TuiDemoPath.Font}`,
                fragment: `custom-size-tool`,
            },
        ],
    },
    {
        section: `Examples`,
        title: `Highlight`,
        subPages: [
            {
                section: `Examples`,
                title: `Mark text`,
                keywords: `editor, highlight, text, wysiwyg, редактор, текст, подсветка, html, rich, text`,
                route: `/${TuiDemoPath.HighlightText}`,
            },
            {
                section: `Examples`,
                title: `Code block`,
                keywords: `editor, highlight, code, block, pre, wysiwyg, редактор, текст, подсветка, html, rich, text`,
                route: `/${TuiDemoPath.HighlightCode}`,
            },
        ],
    },
    {
        section: `Examples`,
        title: `Processing`,
        subPages: [
            {
                section: `Examples`,
                title: `Legacy html`,
                keywords: `editor, processing, content, legacy html, wysiwyg, редактор, текст, html, rich, text`,
                route: `/${TuiDemoPath.ProcessingLegacyHtml}`,
            },
            {
                section: `Examples`,
                title: `Cleanup html`,
                keywords: `editor, processing, content, cleanup html, wysiwyg, редактор, текст, html, rich, text`,
                route: `/${TuiDemoPath.ProcessingCleanupHtml}`,
            },
            {
                section: `Examples`,
                title: `Markdown`,
                keywords: `editor, markdown, wysiwyg, редактор, текст, html, rich, text`,
                route: `/${TuiDemoPath.ProcessingMarkdown}`,
            },
        ],
    },
    {
        section: `Examples`,
        title: `Images`,
        subPages: [
            {
                section: `Examples`,
                title: `Resizable`,
                keywords: `editor, resizable, image, wysiwyg, редактор, текст, html, rich, text`,
                route: `/${TuiDemoPath.ImagesResizable}`,
            },
            {
                section: `Examples`,
                title: `Preview images`,
                keywords: `editor, preview, images, wysiwyg, редактор, текст, html, rich, text`,
                route: `/${TuiDemoPath.ImagesPreview}`,
            },
            {
                section: `Examples`,
                title: `Upload`,
                keywords: `editor, upload, images, wysiwyg, редактор, текст, html, rich, text`,
                route: `/${TuiDemoPath.ImagesUpload}`,
            },
        ],
    },
    {
        section: `Examples`,
        title: `Embed`,
        subPages: [
            {
                section: `Examples`,
                title: `Youtube`,
                keywords: `editor, embed, video player, audio player, youtube, wysiwyg, редактор, плейер, плеер, ютуб, текст, html, rich, text`,
                route: `/${TuiDemoPath.EmbedYoutube}`,
            },
            {
                section: `Examples`,
                title: `Iframe`,
                keywords: `editor, embed, iframe, wysiwyg, редактор, айфрейм, html, rich, text`,
                route: `/${TuiDemoPath.EmbedIframe}`,
            },
            {
                section: `Examples`,
                title: `HTML5`,
                keywords: `editor, embed, video player, audio player, html5, wysiwyg, редактор, плеер, html, rich, text`,
                route: `/${TuiDemoPath.EmbedHtml5}`,
            },
        ],
    },
];
