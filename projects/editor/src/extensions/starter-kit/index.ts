import type {KeyboardShortcutCommand} from '@tiptap/core';
import {Extension} from '@tiptap/core';
import type {BlockquoteOptions} from '@tiptap/extension-blockquote';
import {Blockquote} from '@tiptap/extension-blockquote';
import type {BoldOptions} from '@tiptap/extension-bold';
import {Bold} from '@tiptap/extension-bold';
import type {BulletListOptions} from '@tiptap/extension-bullet-list';
import {BulletList} from '@tiptap/extension-bullet-list';
import type {CodeOptions} from '@tiptap/extension-code';
import {Code} from '@tiptap/extension-code';
import type {CodeBlockOptions} from '@tiptap/extension-code-block';
import {CodeBlock} from '@tiptap/extension-code-block';
import {Document} from '@tiptap/extension-document';
import type {DropcursorOptions} from '@tiptap/extension-dropcursor';
import {Dropcursor} from '@tiptap/extension-dropcursor';
import {Gapcursor} from '@tiptap/extension-gapcursor';
import type {HardBreakOptions} from '@tiptap/extension-hard-break';
import {HardBreak} from '@tiptap/extension-hard-break';
import type {HeadingOptions} from '@tiptap/extension-heading';
import {Heading} from '@tiptap/extension-heading';
import type {HistoryOptions} from '@tiptap/extension-history';
import {History} from '@tiptap/extension-history';
import type {HorizontalRuleOptions} from '@tiptap/extension-horizontal-rule';
import type {ItalicOptions} from '@tiptap/extension-italic';
import {Italic} from '@tiptap/extension-italic';
import type {ListItemOptions} from '@tiptap/extension-list-item';
import {ListItem} from '@tiptap/extension-list-item';
import type {OrderedListOptions} from '@tiptap/extension-ordered-list';
import {OrderedList} from '@tiptap/extension-ordered-list';
import type {ParagraphOptions} from '@tiptap/extension-paragraph';
import {Paragraph} from '@tiptap/extension-paragraph';
import type {PlaceholderOptions} from '@tiptap/extension-placeholder';
import {Placeholder} from '@tiptap/extension-placeholder';
import type {StrikeOptions} from '@tiptap/extension-strike';
import {Strike} from '@tiptap/extension-strike';
import type {TaskItemOptions} from '@tiptap/extension-task-item';
import {TaskItem} from '@tiptap/extension-task-item';
import type {TaskListOptions} from '@tiptap/extension-task-list';
import {TaskList} from '@tiptap/extension-task-list';
import {Text} from '@tiptap/extension-text';

import {TuiCustomEnter} from '../enter';
import {TuiHorizontalRule} from '../horizontal';

export interface TuiStarterKitOptions {
    blockquote: Partial<BlockquoteOptions> | false;
    bold: Partial<BoldOptions> | false;
    bulletList: Partial<BulletListOptions> | false;
    code: Partial<CodeOptions> | false;
    codeBlock: Partial<CodeBlockOptions> | false;
    document: false;
    enter: false;
    dropcursor: Partial<DropcursorOptions> | false;
    gapcursor: false;
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
    text: false;
}

export const TuiStarterKit = Extension.create<TuiStarterKitOptions>({
    name: 'starterKit',

    // eslint-disable-next-line max-statements
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
                    ...(options?.gapcursor ?? {}),
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
                                    this?.editor.commands.toggleHeading({level}),
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
