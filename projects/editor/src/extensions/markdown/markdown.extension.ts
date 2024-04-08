import {Extension, extensions} from '@tiptap/core';

import {TuiMarkdownClipboard} from './clipboard';
import {TuiEditorMarkdownParser} from './parse/markdown-parser';
import {TuiMarkdownSerializer} from './serialize/markdown-serializer';
import {TuiMarkdownTightLists} from './tight-lists';

export const TuiMarkdown = Extension.create({
    name: 'markdown',
    priority: 50,
    addOptions() {
        return {
            html: true,
            tightLists: true,
            tightListClass: 'tight',
            bulletListMarker: '-',
            linkify: false,
            breaks: false,
            transformPastedText: false,
            transformCopiedText: false,
        };
    },
    addCommands() {
        const commands = (extensions?.Commands?.config as any)?.addCommands?.();

        return {
            setContent: (content, emitUpdate, parseOptions) => props =>
                commands?.setContent?.(
                    props.editor.storage.markdown.parser.parse(content),
                    emitUpdate,
                    parseOptions,
                )(props),
            insertContentAt: (range, content, options) => props =>
                commands?.insertContentAt?.(
                    range,
                    props.editor.storage.markdown.parser.parse(content, {inline: true}),
                    options,
                )(props),
        };
    },
    onBeforeCreate() {
        this.editor.storage.markdown = {
            options: {...this.options},
            parser: new TuiEditorMarkdownParser(this.editor, this.options),
            serializer: new TuiMarkdownSerializer(this.editor),
            getMarkdown: () =>
                this.editor.storage.markdown.serializer.serialize(this.editor.state.doc),
        };
        (this.editor.options as any).initialContent = this.editor.options.content;
        this.editor.options.content = this.editor.storage.markdown.parser.parse(
            this.editor.options.content,
        );
    },
    onCreate() {
        this.editor.options.content = (this.editor.options as any).initialContent;
        delete (this.editor.options as any).initialContent;
    },
    addStorage() {
        return {
            /// storage will be defined in onBeforeCreate() to prevent initial object overriding
        };
    },
    addExtensions() {
        return [
            TuiMarkdownTightLists.configure({
                tight: this.options.tightLists,
                tightClass: this.options.tightListClass,
            }),
            TuiMarkdownClipboard.configure({
                transformPastedText: this.options.transformPastedText,
                transformCopiedText: this.options.transformCopiedText,
            }),
        ];
    },
});
