import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TuiDemoPath} from './constants/demo-path';

export const appRoutes: Routes = [
    // Editor
    {
        path: TuiDemoPath.StarterKit,
        loadChildren: async () =>
            (await import(`./pages/starter/editor-starter.module`))
                .ExampleTuiEditorStarterModule,
        data: {
            title: `StarterKit`,
        },
    },
    {
        path: `stackblitz`,
        loadChildren: async () =>
            (await import(`./pages/stackblitz/starter/stackblitz-starter.module`))
                .StackblitzStarterModule,
        data: {
            title: `Stackblitz Starter`,
        },
    },
    {
        path: TuiDemoPath.ColorPicker,
        loadChildren: async () =>
            (await import(`./pages/color-picker/editor-input-color-picker.module`))
                .ExampleTuiEditorInputColorPickerModule,
        data: {
            title: `Input color picker`,
        },
    },
    {
        path: TuiDemoPath.AngularContenteditableAccessor,
        loadChildren: async () =>
            (
                await import(
                    `./pages/angular-contenteditable-accessor/angular-contenteditable-accessor.module`
                )
            ).ExampleAngularContenteditableAccessorModule,
        data: {
            title: `Angular contenteditable accessor`,
        },
    },
    {
        path: TuiDemoPath.Font,
        loadChildren: async () =>
            (await import(`./pages/font/editor-font.module`)).ExampleTuiEditorFontModule,
        data: {
            title: `Font`,
        },
    },
    {
        path: TuiDemoPath.Anchors,
        loadChildren: async () =>
            (await import(`./pages/anchors/editor-anchors.module`))
                .ExampleTuiEditorAnchorsModule,
        data: {
            title: `Anchors`,
        },
    },
    {
        path: TuiDemoPath.Focus,
        loadChildren: async () =>
            (await import(`./pages/focus/editor-focus.module`))
                .ExampleTuiEditorFocusModule,
        data: {
            title: `Focus`,
        },
    },
    {
        path: TuiDemoPath.Groups,
        loadChildren: async () =>
            (await import(`./pages/groups/editor-groups.module`))
                .ExampleTuiEditorGroupsModule,
        data: {
            title: `Groups`,
        },
    },
    {
        path: TuiDemoPath.UploadFiles,
        loadChildren: async () =>
            (await import(`./pages/upload-files/editor-upload-files.module`))
                .ExampleTuiEditorUploadFilesModule,
        data: {
            title: `Upload files`,
        },
    },
    {
        path: TuiDemoPath.PasteEmojiTool,
        loadChildren: async () =>
            (await import(`./pages/custom-tool/paste-emoji/editor-paste-emoji.module`))
                .ExampleTuiEditorPasteEmojiToolModule,
        data: {
            title: `Editor — Paste emoji custom tool`,
        },
    },
    {
        path: TuiDemoPath.ColorPickerTool,
        loadChildren: async () =>
            (await import(`./pages/custom-tool/color-picker/editor-color-picker.module`))
                .ExampleTuiEditorColorPickerToolModule,
        data: {
            title: `Editor — Color picker custom tool`,
        },
    },
    {
        path: TuiDemoPath.PasteImageTool,
        loadChildren: async () =>
            (
                await import(
                    `./pages/custom-tool/paste-image/editor-paste-image-tool.module`
                )
            ).ExampleTuiEditorPasteImageToolModule,
        data: {
            title: `Editor — Paste image custom tool`,
        },
    },
    {
        path: TuiDemoPath.HighlightText,
        loadChildren: async () =>
            (await import(`./pages/highlight/text/editor-mark-text.module`))
                .ExampleTuiEditorMarkTextModule,
        data: {
            title: `Editor — Highlight text`,
        },
    },
    {
        path: TuiDemoPath.ProcessingLegacyHtml,
        loadChildren: async () =>
            (await import(`./pages/processing/legacy-html/editor-legacy-html.module`))
                .ExampleTuiEditorLegacyHtmlModule,
        data: {
            title: `Editor — Legacy html`,
        },
    },
    {
        path: TuiDemoPath.ProcessingCleanupHtml,
        loadChildren: async () =>
            (await import(`./pages/processing/cleanup-html/editor-cleanup-html.module`))
                .ExampleTuiEditorCleanupHtmlModule,
        data: {
            title: `Editor — Cleanup html`,
        },
    },
    {
        path: TuiDemoPath.ProcessingMarkdown,
        loadChildren: async () =>
            (await import(`./pages/processing/markdown/editor-markdown.module`))
                .ExampleTuiEditorMarkdownModule,
        data: {
            title: `Editor — Markdown`,
        },
    },
    {
        path: TuiDemoPath.HighlightCode,
        loadChildren: async () =>
            (await import(`./pages/highlight/code/editor-code-block.module`))
                .ExampleTuiEditorCodeBlockModule,
        data: {
            title: `Editor — Highlight code`,
        },
    },
    {
        path: TuiDemoPath.ImagesResizable,
        loadChildren: async () =>
            (await import(`./pages/images/resizable/editor-resizable-images.module`))
                .ExampleTuiEditorResizableImagesToolModule,
        data: {
            title: `Editor  — Resizable images`,
        },
    },
    {
        path: TuiDemoPath.ImagesPreview,
        loadChildren: async () =>
            (await import(`./pages/images/preview/editor-preview-images.module`))
                .ExampleTuiEditorPreviewImagesToolModule,
        data: {
            title: `Editor  — Preview images`,
        },
    },
    {
        path: TuiDemoPath.ImagesUpload,
        loadChildren: async () =>
            (await import(`./pages/images/upload/editor-upload-images.module`))
                .ExampleTuiEditorUploadImagesModule,
        data: {
            title: `Editor — Upload images`,
        },
    },
    {
        path: TuiDemoPath.EmbedYoutube,
        loadChildren: async () =>
            (await import(`./pages/embed/youtube/editor-embed-youtube.module`))
                .ExampleTuiEditorEmbedYoutubeModule,
        data: {
            title: `Editor — Youtube`,
        },
    },
    {
        path: TuiDemoPath.EmbedIframe,
        loadChildren: async () =>
            (await import(`./pages/embed/iframe/editor-embed-iframe.module`))
                .ExampleTuiEditorEmbedIframeModule,
        data: {
            title: `Editor — Iframe`,
        },
    },
    {
        path: TuiDemoPath.EmbedHtml5,
        loadChildren: async () =>
            (await import(`./pages/embed/html5/editor-embed-html5.module`))
                .ExampleTuiEditorEmbedHtml5Module,
        data: {
            title: `Editor — HTML5`,
        },
    },
    // Other
    {
        path: TuiDemoPath.Changelog,
        loadChildren: async () =>
            (await import(`./pages/changelog/editor-changelog.module`))
                .ExampleTuiEditorChangelogModule,
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
            scrollPositionRestoration: `enabled`,
            anchorScrolling: `enabled`,
            scrollOffset: [0, 64],
        }),
    ],
    exports: [RouterModule],
})
export class TuiAppRoutingModule {}
