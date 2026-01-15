import {inject, INJECTOR, type Injector, type Provider} from '@angular/core';
import {TUI_EDITOR_EXTENSIONS} from '@taiga-ui/editor/common';
import {type TuiBackgroundColorOptions} from '@taiga-ui/editor/extensions/background-color';
import {type TuiDetailsExtensionOptions} from '@taiga-ui/editor/extensions/details';
import {type TuiFontColorOptions} from '@taiga-ui/editor/extensions/font-color';
import {type TuiFontSizeOptions} from '@taiga-ui/editor/extensions/font-size';
import {type TuiImageExtensionOptions} from '@taiga-ui/editor/extensions/image-editor';
import {
    type Extension,
    type KeyboardShortcutCommand,
    type Mark,
    type Node,
} from '@tiptap/core';
import {type BlockquoteOptions} from '@tiptap/extension-blockquote';
import {type BoldOptions} from '@tiptap/extension-bold';
import {type BulletListOptions} from '@tiptap/extension-bullet-list';
import {type CodeOptions} from '@tiptap/extension-code';
import {type CodeBlockOptions} from '@tiptap/extension-code-block';
import {type DetailsContentOptions} from '@tiptap/extension-details-content/src/details-content';
import {type DetailsSummaryOptions} from '@tiptap/extension-details-summary';
import {type DropcursorOptions} from '@tiptap/extension-dropcursor';
import {type HardBreakOptions} from '@tiptap/extension-hard-break';
import {type HeadingOptions} from '@tiptap/extension-heading';
import {type HistoryOptions} from '@tiptap/extension-history';
import {type HorizontalRuleOptions} from '@tiptap/extension-horizontal-rule';
import {type ItalicOptions} from '@tiptap/extension-italic';
import {type LinkOptions} from '@tiptap/extension-link';
import {type ListItemOptions} from '@tiptap/extension-list-item';
import {type OrderedListOptions} from '@tiptap/extension-ordered-list';
import {type ParagraphOptions} from '@tiptap/extension-paragraph';
import {type PlaceholderOptions} from '@tiptap/extension-placeholder';
import {type StrikeOptions} from '@tiptap/extension-strike';
import {type SubscriptExtensionOptions} from '@tiptap/extension-subscript';
import {type SuperscriptExtensionOptions} from '@tiptap/extension-superscript';
import {type TableHeaderOptions} from '@tiptap/extension-table-header';
import {type TableRowOptions} from '@tiptap/extension-table-row/src/table-row';
import {type TaskItemOptions} from '@tiptap/extension-task-item';
import {type TaskListOptions} from '@tiptap/extension-task-list';
import {type TextAlignOptions} from '@tiptap/extension-text-align';
import {type TextStyleOptions} from '@tiptap/extension-text-style';
import {type UnderlineOptions} from '@tiptap/extension-underline';
import {type StarterKitOptions} from '@tiptap/starter-kit';

interface Options {
    starterKit: Partial<StarterKitOptions> | boolean;
    blockquote: Partial<BlockquoteOptions> | boolean;
    bold: Partial<BoldOptions> | boolean;
    bulletList: Partial<BulletListOptions> | boolean;
    code: Partial<CodeOptions> | boolean;
    codeBlock: Partial<CodeBlockOptions> | boolean;
    document: Partial<Record<string, unknown>> | boolean;
    dropcursor: Partial<DropcursorOptions> | boolean;
    gapcursor: Partial<{allowGapCursor: boolean}> | boolean;
    hardBreak: Partial<HardBreakOptions> | boolean;
    heading: Partial<HeadingOptions> | boolean;
    history: Partial<HistoryOptions> | boolean;
    horizontalRule: Partial<HorizontalRuleOptions> | boolean;
    italic: Partial<ItalicOptions> | boolean;
    taskList: Partial<TaskListOptions> | boolean;
    taskItem: Partial<TaskItemOptions> | boolean;
    listItem: Partial<ListItemOptions> | boolean;
    orderedList: Partial<OrderedListOptions> | boolean;
    paragraph: Partial<ParagraphOptions> | boolean;
    strike: Partial<StrikeOptions> | boolean;
    text: Partial<Record<string, unknown>> | boolean;
    placeholder: Partial<PlaceholderOptions> | boolean;
    enter: Partial<Record<string, unknown>> | boolean;
    textStyle: Partial<TextStyleOptions> | boolean;
    fontSize: Partial<TuiFontSizeOptions> | boolean;
    textAlign: Partial<TextAlignOptions> | boolean;
    underline: Partial<UnderlineOptions> | boolean;
    subscript: Partial<SubscriptExtensionOptions> | boolean;
    superscript: Partial<SuperscriptExtensionOptions> | boolean;
    fontColor: Partial<TuiFontColorOptions> | boolean;
    link: Partial<LinkOptions> | boolean;
    jumpAnchor: Partial<Record<string, unknown>> | boolean;
    fileLink: Partial<Record<string, unknown>> | boolean;
    backgroundColor: Partial<TuiBackgroundColorOptions> | boolean;
    table: Partial<Record<string, unknown>> | boolean;
    tableCell: Partial<Record<string, unknown>> | boolean;
    tableRow: Partial<TableRowOptions> | boolean;
    tableHeader: Partial<TableHeaderOptions> | boolean;
    tableCellBackground: Partial<Record<string, unknown>> | boolean;
    tab: Partial<Record<string, unknown>> | boolean;
    details: Partial<TuiDetailsExtensionOptions> | boolean;
    detailsSummary: Partial<DetailsSummaryOptions> | boolean;
    detailsContent: Partial<DetailsContentOptions> | boolean;
    image: Partial<TuiImageExtensionOptions> | boolean;
    video: Partial<Record<string, unknown>> | boolean;
    audio: Partial<Record<string, unknown>> | boolean;
    source: Partial<Record<string, unknown>> | boolean;
    iframe: Partial<Record<string, unknown>> | boolean;
}

const EXTENSIONS = [
    {
        key: 'listItem',
        default: true,
        async loader(options: Partial<ListItemOptions>) {
            const {ListItem} = await import('@tiptap/extension-list-item');

            return ListItem.configure(options);
        },
    },
    {
        key: 'blockquote',
        default: true,
        async loader(options: Partial<BlockquoteOptions>) {
            const {Blockquote} = await import('@tiptap/extension-blockquote');

            return Blockquote.configure(options);
        },
    },
    {
        key: 'bold',
        default: true,
        async loader(options: Partial<BoldOptions>) {
            const {Bold} = await import('@tiptap/extension-bold');

            return Bold.configure(options);
        },
    },
    {
        key: 'bulletList',
        default: true,
        async loader(options: Partial<BulletListOptions>) {
            const {BulletList} = await import('@tiptap/extension-bullet-list');

            return BulletList.configure(options);
        },
    },
    {
        key: 'code',
        default: true,
        async loader(options: Partial<CodeOptions>) {
            const {Code} = await import('@tiptap/extension-code');

            return Code.configure(options);
        },
    },
    {
        key: 'codeBlock',
        default: true,
        async loader(options: Partial<CodeBlockOptions>) {
            const {CodeBlock} = await import('@tiptap/extension-code-block');

            return CodeBlock.configure(options);
        },
    },
    {
        key: 'document',
        default: true,
        async loader() {
            const {Document} = await import('@tiptap/extension-document');

            return Document.configure();
        },
    },
    {
        key: 'dropcursor',
        default: true,
        async loader(options: Partial<DropcursorOptions>) {
            const {Dropcursor} = await import('@tiptap/extension-dropcursor');

            return Dropcursor.configure(options);
        },
    },
    {
        key: 'gapcursor',
        default: true,
        async loader({allowGapCursor = true}) {
            const {Gapcursor} = await import('@tiptap/extension-gapcursor');

            return Gapcursor.configure({allowGapCursor});
        },
    },
    {
        key: 'hardBreak',
        default: true,
        async loader(options: Partial<HardBreakOptions>) {
            const {HardBreak} = await import('@tiptap/extension-hard-break');

            return HardBreak.configure(options);
        },
    },
    {
        key: 'heading',
        default: true,
        async loader(options: Partial<HeadingOptions>) {
            const {Heading} = await import('@tiptap/extension-heading');

            return Heading.configure({levels: [1, 2, 3, 4, 5, 6], ...options}).extend({
                addKeyboardShortcuts(): Record<string, KeyboardShortcutCommand> {
                    return this.options.levels.reduce(
                        (items: any, level: any) => ({
                            ...(items || {}),
                            [`Mod-Alt-${level}`]: () =>
                                this.editor.commands.toggleHeading({level}),
                        }),
                        {},
                    );
                },
            });
        },
    },
    {
        key: 'history',
        default: true,
        async loader(options: Partial<HistoryOptions>) {
            const {History} = await import('@tiptap/extension-history');

            return History.configure(options);
        },
    },
    {
        key: 'horizontalRule',
        default: true,
        async loader(options: Partial<HorizontalRuleOptions>) {
            const {TuiHorizontalRule} =
                await import('@taiga-ui/editor/extensions/horizontal');

            return TuiHorizontalRule.configure(options);
        },
    },
    {
        key: 'italic',
        default: true,
        async loader(options: Partial<ItalicOptions>) {
            const {Italic} = await import('@tiptap/extension-italic');

            return Italic.configure(options);
        },
    },
    {
        key: 'italic',
        default: true,
        async loader(options: Partial<ItalicOptions>) {
            const {Italic} = await import('@tiptap/extension-italic');

            return Italic.configure(options);
        },
    },
    {
        key: 'taskList',
        default: true,
        async loader(options: Partial<TaskListOptions>) {
            const {TaskList} = await import('@tiptap/extension-task-list');

            return TaskList.configure(options);
        },
    },
    {
        key: 'taskItem',
        default: true,
        async loader(options: Partial<TaskItemOptions>) {
            const {TaskItem} = await import('@tiptap/extension-task-item');

            return TaskItem.configure({nested: true, ...options});
        },
    },
    {
        key: 'orderedList',
        default: true,
        async loader(options: Partial<OrderedListOptions>) {
            const {OrderedList} = await import('@tiptap/extension-ordered-list');

            return OrderedList.configure(options);
        },
    },
    {
        key: 'paragraph',
        default: true,
        async loader(options: Partial<ParagraphOptions>) {
            const {Paragraph} = await import('@tiptap/extension-paragraph');

            return Paragraph.configure(options);
        },
    },
    {
        key: 'strike',
        default: true,
        async loader(options: Partial<StrikeOptions>) {
            const {Strike} = await import('@tiptap/extension-strike');

            return Strike.configure(options);
        },
    },
    {
        key: 'text',
        default: true,
        async loader(options: Partial<Partial<Record<string, unknown>>>) {
            const {Text} = await import('@tiptap/extension-text');

            return Text.configure(options);
        },
    },
    {
        key: 'placeholder',
        default: false,
        async loader(options: Partial<PlaceholderOptions>) {
            const {Placeholder} = await import('@tiptap/extension-placeholder');

            return Placeholder.configure({
                emptyNodeClass: 't-editor-placeholder',
                includeChildren: true,
                showOnlyCurrent: true,
                showOnlyWhenEditable: true,
                placeholder: '',
                ...options,
            });
        },
    },
    {
        key: 'enter',
        default: true,
        async loader(options: Partial<Record<string, unknown>>) {
            const {TuiCustomEnter} = await import('@taiga-ui/editor/extensions/enter');

            return TuiCustomEnter.configure(options);
        },
    },
    {
        key: 'fontSize',
        default: true,
        async loader(options: Partial<TuiFontSizeOptions>) {
            const {TuiFontSizeExtension} =
                await import('@taiga-ui/editor/extensions/font-size');

            return TuiFontSizeExtension.configure(options);
        },
    },
    {
        key: 'textStyle',
        default: true,
        async loader(options: Partial<TextStyleOptions>) {
            const {TextStyle} = await import('@tiptap/extension-text-style');

            return TextStyle.configure(options);
        },
    },
    {
        key: 'textAlign',
        default: true,
        async loader(options: Partial<TextAlignOptions>) {
            const {TextAlign} = await import('@tiptap/extension-text-align');

            return TextAlign.configure({types: ['heading', 'paragraph'], ...options});
        },
    },
    {
        key: 'underline',
        default: true,
        async loader(options: Partial<UnderlineOptions>) {
            const {Underline} = await import('@tiptap/extension-underline');

            return Underline.configure(options);
        },
    },
    {
        key: 'subscript',
        default: true,
        async loader(options: Partial<SubscriptExtensionOptions>) {
            const {Subscript} = await import('@tiptap/extension-subscript');

            return Subscript.configure(options);
        },
    },
    {
        key: 'superscript',
        default: true,
        async loader(options: Partial<SuperscriptExtensionOptions>) {
            const {Superscript} = await import('@tiptap/extension-superscript');

            return Superscript.configure(options);
        },
    },
    {
        key: 'fontColor',
        default: true,
        async loader(options: Partial<TuiFontColorOptions>) {
            const {TuiFontColor} = await import('@taiga-ui/editor/extensions/font-color');

            return TuiFontColor.configure(options);
        },
    },
    {
        key: 'link',
        default: true,
        async loader(options: Partial<LinkOptions>) {
            const {TuiLink} = await import('@taiga-ui/editor/extensions/link');

            return TuiLink.configure(options);
        },
    },
    {
        key: 'jumpAnchor',
        default: true,
        async loader(options: Partial<Record<string, unknown>>) {
            const {TuiJumpAnchor} =
                await import('@taiga-ui/editor/extensions/jump-anchor');

            return TuiJumpAnchor.configure(options);
        },
    },
    {
        key: 'fileLink',
        default: true,
        async loader(options: Partial<Record<string, unknown>>) {
            const {TuiFileLink} = await import('@taiga-ui/editor/extensions/file-link');

            return TuiFileLink.configure(options);
        },
    },
    {
        key: 'backgroundColor',
        default: true,
        async loader(options: Partial<TuiBackgroundColorOptions>) {
            const {TuiBackgroundColor} =
                await import('@taiga-ui/editor/extensions/background-color');

            return TuiBackgroundColor.configure(options);
        },
    },
    {
        key: 'table',
        default: true,
        async loader(options: Partial<Record<string, unknown>>) {
            const {TuiTable} = await import('@taiga-ui/editor/extensions/table');

            return TuiTable.configure(options);
        },
    },
    {
        key: 'tableCell',
        default: true,
        async loader(options: Partial<Record<string, unknown>>) {
            const {TuiTableCell} = await import('@taiga-ui/editor/extensions/table-cell');

            return TuiTableCell.configure(options);
        },
    },
    {
        key: 'tableRow',
        default: true,
        async loader(options: Partial<TableRowOptions>) {
            const {TableRow} = await import('@tiptap/extension-table-row');

            return TableRow.configure(options);
        },
    },
    {
        key: 'tableHeader',
        default: true,
        async loader(options: Partial<TableHeaderOptions>) {
            const {TableHeader} = await import('@tiptap/extension-table-header');

            return TableHeader.configure(options);
        },
    },
    {
        key: 'tableCellBackground',
        default: true,
        async loader(options: Partial<Record<string, unknown>>) {
            const {TableCellBackground} =
                await import('@taiga-ui/editor/extensions/table-cell-background');

            return TableCellBackground.configure(options);
        },
    },
    {
        key: 'tab',
        default: true,
        async loader(options: Partial<Record<string, unknown>>) {
            const {TuiTabExtension} =
                await import('@taiga-ui/editor/extensions/indent-outdent');

            return TuiTabExtension.configure(options);
        },
    },
    {
        key: 'details',
        default: false,
        async loader(options: Partial<TuiDetailsExtensionOptions>) {
            const {TuiDetailsExtension} =
                await import('@taiga-ui/editor/extensions/details');

            return TuiDetailsExtension.configure(options);
        },
    },
    {
        key: 'detailsSummary',
        default: false,
        async loader(options: Partial<DetailsSummaryOptions>) {
            const {TuiDetailsSummary} =
                await import('@taiga-ui/editor/extensions/details');

            return TuiDetailsSummary.configure(options);
        },
    },
    {
        key: 'detailsContent',
        default: false,
        async loader(options: Partial<DetailsContentOptions>) {
            const {TuiDetailsContent} =
                await import('@taiga-ui/editor/extensions/details');

            return TuiDetailsContent.configure(options);
        },
    },
    {
        key: 'image',
        default: false,
        async loader(options: Partial<TuiImageExtensionOptions>, injector: Injector) {
            const {tuiCreateImageEditorExtension} =
                await import('@taiga-ui/editor/extensions/image-editor');

            return tuiCreateImageEditorExtension({injector, ...options});
        },
    },
    {
        key: 'video',
        default: false,
        async loader(options: Partial<Record<string, unknown>>) {
            const {TuiVideo} = await import('@taiga-ui/editor/extensions/media');

            return TuiVideo.configure(options);
        },
    },
    {
        key: 'audio',
        default: false,
        async loader(options: Partial<Record<string, unknown>>) {
            const {TuiAudio} = await import('@taiga-ui/editor/extensions/media');

            return TuiAudio.configure(options);
        },
    },
    {
        key: 'source',
        default: false,
        async loader(options: Partial<Record<string, unknown>>) {
            const {TuiSource} = await import('@taiga-ui/editor/extensions/media');

            return TuiSource.configure(options);
        },
    },
    {
        key: 'iframe',
        default: false,
        async loader(_: Partial<Record<string, unknown>>, injector: Injector) {
            const {tuiCreateIframeEditorExtension} =
                await import('@taiga-ui/editor/extensions/iframe-editor');

            return tuiCreateIframeEditorExtension({injector});
        },
    },
] as const;

const defaults = EXTENSIONS.reduce((options, extension) => {
    (options as Record<keyof Options, Record<string, unknown> | boolean>)[extension.key] =
        extension.default;

    return options;
}, {} as Options);

type AsyncExtension<Options, Storage> = Promise<
    Extension<Options, Storage> | Mark<Options, Storage> | Node<Options, Storage>
>;

export function provideTuiEditor(options: Partial<Options>): Provider;
export function provideTuiEditor<O, S>(
    ...extensions: ReadonlyArray<(_: Injector) => AsyncExtension<O, S>>
): Provider;
export function provideTuiEditor<O, S>(
    options: Partial<Options>,
    ...extensions: ReadonlyArray<(_: Injector) => AsyncExtension<O, S>>
): Provider;
export function provideTuiEditor<O, S>(
    overrides: Partial<Options> | ((_: Injector) => AsyncExtension<O, S>) | undefined,
    ...extensions: ReadonlyArray<(_: Injector) => AsyncExtension<O, S>>
): Provider {
    const options =
        typeof overrides === 'object' && !Array.isArray(overrides)
            ? {...defaults, ...overrides}
            : defaults;

    return {
        provide: TUI_EDITOR_EXTENSIONS,
        multi: true,
        useFactory(): ReadonlyArray<AsyncExtension<O, S>> {
            const injector = inject(INJECTOR);
            const ownExtensions =
                typeof overrides === 'function'
                    ? extensions.concat(overrides)
                    : extensions;

            return EXTENSIONS.filter(({key}) => !!options[key])
                .map(async ({key, loader}): AsyncExtension<O, S> => {
                    const config = options[key];
                    const extensionOptions = typeof config === 'boolean' ? {} : config;

                    return loader(extensionOptions, injector);
                })
                .concat(ownExtensions.map(async (extension) => extension(injector)));
        },
    };
}
