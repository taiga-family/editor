import {
    type CommandProps,
    type Content,
    Extension,
    extensions,
    type InsertContentAtOptions,
    type Range,
    type RawCommands,
    type SetContentOptions,
} from '@tiptap/core';
import {type Fragment, type Node as ProseMirrorNode} from '@tiptap/pm/model';

import {TuiMarkdownClipboard} from '../clipboard';
import {TuiEditorMarkdownParser} from '../parse';
import {TuiMarkdownSerializer} from '../serialize';
import {TuiMarkdownTightLists} from '../tight-lists';

export interface TuiMarkdownOptions {
    html: boolean;
    tightLists: boolean;
    tightListClass: string;
    bulletListMarker: string;
    linkify: boolean;
    breaks: boolean;
    transformPastedText: boolean;
    transformCopiedText: boolean;
}

export interface TuiMarkdownStorage {
    options: TuiMarkdownOptions;
    parser: TuiEditorMarkdownParser;
    serializer: TuiMarkdownSerializer;
    getMarkdown(): string;
}

declare module '@tiptap/core' {
    interface Storage {
        markdown: TuiMarkdownStorage;
    }
}

type MarkdownContent = Content | Fragment | ProseMirrorNode;

export const TuiMarkdown = Extension.create<TuiMarkdownOptions>({
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
    addCommands(): Partial<RawCommands> {
        const commands = (
            extensions.Commands.config as {
                addCommands?(): Partial<RawCommands>;
            }
        ).addCommands?.();

        return {
            setContent:
                (content: MarkdownContent, options?: SetContentOptions) =>
                (props: CommandProps) => {
                    const command = commands?.setContent?.(
                        props.editor.storage.markdown.parser.parse(content),
                        options,
                    );

                    return command?.(props) ?? false;
                },
            insertContentAt:
                (
                    range: Range | number,
                    content: MarkdownContent,
                    options?: InsertContentAtOptions,
                ) =>
                (props: CommandProps) => {
                    const command = commands?.insertContentAt?.(
                        range,
                        props.editor.storage.markdown.parser.parse(content, {
                            inline: true,
                        }),
                        options,
                    );

                    return command?.(props) ?? false;
                },
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
