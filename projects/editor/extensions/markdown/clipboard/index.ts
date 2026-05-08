import {Extension} from '@tiptap/core';
import {DOMParser, type Slice} from '@tiptap/pm/model';
import {Plugin, PluginKey} from '@tiptap/pm/state';

import {tuiElementFromString} from '../util/dom';

export const TuiMarkdownClipboard = Extension.create({
    name: 'markdownClipboard',
    addOptions() {
        return {
            transformPastedText: false,
            transformCopiedText: false,
        };
    },
    addProseMirrorPlugins() {
        return [
            new Plugin({
                key: new PluginKey('markdownClipboard'),
                props: {
                    clipboardTextParser: (text, context, plainText): Slice => {
                        // eslint-disable-next-line unicorn/no-typeof-undefined
                        if (typeof DOMParser === 'undefined') {
                            return null as any;
                        }

                        if (plainText || !this.options.transformPastedText) {
                            return null as any; // pasting with shift key prevents formatting
                        }

                        const parsed = this.editor.storage.markdown.parser.parse(text, {
                            inline: true,
                        });

                        const dom = tuiElementFromString(parsed);

                        return dom
                            ? DOMParser.fromSchema(this.editor.schema).parseSlice(dom, {
                                  preserveWhitespace: true,
                                  context,
                              })
                            : (null as any);
                    },
                    clipboardTextSerializer: (slice) =>
                        this.options.transformCopiedText
                            ? this.editor.storage.markdown.serializer.serialize(
                                  slice.content,
                              )
                            : null,
                },
            }),
        ];
    },
});
