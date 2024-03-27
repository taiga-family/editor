import type {Attributes} from '@tiptap/core';
import {mergeAttributes, Node} from '@tiptap/core';
import type {DOMOutputSpec, Node as ProseMirrorNode} from '@tiptap/pm/model';

export interface TuiMentionOptions {
    HTMLAttributes: Record<string, any>;
    renderHTML: (props: {
        options: TuiMentionOptions;
        node: ProseMirrorNode;
    }) => DOMOutputSpec;
}

export const TuiMention = Node.create<TuiMentionOptions>({
    name: 'mention',
    group: 'inline',
    inline: true,
    selectable: true,
    atom: true,

    addOptions(): TuiMentionOptions {
        return {
            HTMLAttributes: {},
            renderHTML({node}) {
                return [
                    'span',
                    this.HTMLAttributes,
                    `@${node.attrs.label ?? node.attrs.id}`.replaceAll(/@+/g, '@'),
                ];
            },
        };
    },

    addAttributes(): Attributes {
        return {
            id: {
                default: null,
                keepOnSplit: true,
                parseHTML: element => element.innerText,
                renderHTML: () => ({'data-type': this.name}),
            },
        };
    },

    parseHTML(): [{tag: string}] {
        return [{tag: `span[data-type="${this.name}"]`}];
    },

    renderHTML({node, HTMLAttributes}): DOMOutputSpec {
        const html = this.options.renderHTML({
            options: this.options,
            node,
        });

        if (typeof html === 'string') {
            return [
                'span',
                mergeAttributes(
                    {'data-type': this.name},
                    this.options.HTMLAttributes,
                    HTMLAttributes,
                ),
                html,
            ];
        }

        return [
            'span',
            mergeAttributes(
                {'data-type': this.name},
                this.options.HTMLAttributes,
                HTMLAttributes,
            ),
            (html as any)?.[2],
        ];
    },
});
