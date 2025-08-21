import {TuiCustomEnter} from '@taiga-ui/editor/extensions/enter';
import {TuiHorizontalRule} from '@taiga-ui/editor/extensions/horizontal';
import {Extension, type KeyboardShortcutCommand} from '@tiptap/core';
import {Blockquote, type BlockquoteOptions} from '@tiptap/extension-blockquote';
import {Bold, type BoldOptions} from '@tiptap/extension-bold';
import {BulletList, type BulletListOptions} from '@tiptap/extension-bullet-list';
import {Code, type CodeOptions} from '@tiptap/extension-code';
import {CodeBlock, type CodeBlockOptions} from '@tiptap/extension-code-block';
import {Document} from '@tiptap/extension-document';
import {Dropcursor, type DropcursorOptions} from '@tiptap/extension-dropcursor';
import {Gapcursor} from '@tiptap/extension-gapcursor';
import {HardBreak, type HardBreakOptions} from '@tiptap/extension-hard-break';
import {Heading, type HeadingOptions} from '@tiptap/extension-heading';
import {History, type HistoryOptions} from '@tiptap/extension-history';
import {type HorizontalRuleOptions} from '@tiptap/extension-horizontal-rule';
import {Italic, type ItalicOptions} from '@tiptap/extension-italic';
import {ListItem, type ListItemOptions} from '@tiptap/extension-list-item';
import {OrderedList, type OrderedListOptions} from '@tiptap/extension-ordered-list';
import {Paragraph, type ParagraphOptions} from '@tiptap/extension-paragraph';
import {Placeholder, type PlaceholderOptions} from '@tiptap/extension-placeholder';
import {Strike, type StrikeOptions} from '@tiptap/extension-strike';
import {TaskItem, type TaskItemOptions} from '@tiptap/extension-task-item';
import {TaskList, type TaskListOptions} from '@tiptap/extension-task-list';
import {Text} from '@tiptap/extension-text';

export interface TuiStarterKitOptions {
    blockquote: Partial<BlockquoteOptions> | false;
    bold: Partial<BoldOptions> | false;
    bulletList: Partial<BulletListOptions> | false;
    code: Partial<CodeOptions> | false;
    codeBlock: Partial<CodeBlockOptions> | false;
    document: Partial<Record<string, unknown>> | false;
    enter: Partial<Record<string, unknown>> | false;
    dropcursor: Partial<DropcursorOptions> | false;
    gapcursor: Partial<{allowGapCursor: true}> | false;
    hardBreak: Partial<HardBreakOptions> | false;
    heading: Partial<HeadingOptions> | false;
    history: Partial<HistoryOptions> | false;
    horizontalRule: Partial<HorizontalRuleOptions> | false;
    italic: Partial<ItalicOptions> | false;
    listItem: Partial<ListItemOptions> | false;
    taskItem: Partial<TaskItemOptions> | false;
    taskList: Partial<TaskListOptions> | false;
    orderedList: Partial<OrderedListOptions> | false;
    paragraph: Partial<ParagraphOptions> | false;
    strike: Partial<StrikeOptions> | false;
    placeholder: Partial<PlaceholderOptions> | false;
    text: Partial<Record<string, unknown>> | false;
}

export const TuiStarterKit = Extension.create<TuiStarterKitOptions>({
    name: 'starterKit',

    addExtensions() {
        const extensions = [];

        // note: in runtime it possibly be undefined
        const options = this.options as Partial<TuiStarterKitOptions> | undefined;

        if (options?.blockquote !== false) {
            extensions.push(Blockquote.configure(options?.blockquote));
        }

        if (options?.bold !== false) {
            extensions.push(Bold.configure(options?.bold));
        }

        if (options?.bulletList !== false) {
            extensions.push(BulletList.configure(options?.bulletList));
        }

        if (options?.code !== false) {
            extensions.push(Code.configure(options?.code));
        }

        if (options?.codeBlock !== false) {
            extensions.push(CodeBlock.configure(options?.codeBlock));
        }

        if (options?.document !== false) {
            extensions.push(Document.configure(options?.document));
        }

        if (options?.dropcursor !== false) {
            extensions.push(Dropcursor.configure(options?.dropcursor));
        }

        if (options?.gapcursor !== false) {
            extensions.push(
                Gapcursor.configure({
                    allowGapCursor: true,
                    ...(options?.gapcursor || {}),
                }),
            );
        }

        if (options?.hardBreak !== false) {
            extensions.push(HardBreak.configure(options?.hardBreak));
        }

        if (options?.heading !== false) {
            extensions.push(
                Heading.configure({
                    levels: [1, 2, 3, 4, 5, 6],
                    ...options?.heading,
                }).extend({
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
                }),
            );
        }

        if (options?.history !== false) {
            extensions.push(
                History.configure({
                    depth: 100,
                    newGroupDelay: 500,
                    ...options?.history,
                }),
            );
        }

        if (options?.horizontalRule !== false) {
            extensions.push(TuiHorizontalRule.configure(options?.horizontalRule));
        }

        if (options?.italic !== false) {
            extensions.push(Italic.configure(options?.italic));
        }

        if (options?.listItem !== false) {
            extensions.push(ListItem.configure(options?.listItem));
        }

        if (options?.taskList !== false) {
            extensions.push(TaskList.configure(options?.taskList));
        }

        if (options?.taskItem !== false) {
            extensions.push(
                TaskItem.configure({
                    nested: true,
                    ...options?.taskItem,
                }),
            );
        }

        if (options?.orderedList !== false) {
            extensions.push(OrderedList.configure(options?.orderedList));
        }

        if (options?.paragraph !== false) {
            extensions.push(Paragraph.configure(options?.paragraph));
        }

        if (options?.strike !== false) {
            extensions.push(Strike.configure(options?.strike));
        }

        if (options?.text !== false) {
            extensions.push(Text.configure(options?.text));
        }

        if (options?.placeholder !== false) {
            extensions.push(
                Placeholder.configure({
                    emptyNodeClass: 't-editor-placeholder',
                    includeChildren: true,
                    showOnlyCurrent: true,
                    showOnlyWhenEditable: true,
                    placeholder: '',
                    ...(options?.placeholder ?? {}),
                }),
            );
        }

        if (options?.enter !== false) {
            extensions.push(TuiCustomEnter);
        }

        return extensions;
    },
});
