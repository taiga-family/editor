import {getHTMLFromFragment, Mark} from '@tiptap/core';
import {Fragment, type Mark as ProseMark} from '@tiptap/pm/model';

import {type TuiMarkdownContext} from '../../../extension';

function getMarkTags(mark: ProseMark): [string, string] | null {
    const schema = mark.type.schema;
    const node = schema.text(' ', [mark]);
    const html = getHTMLFromFragment(Fragment.from(node), schema);
    const match = /^(<.*?>) (<\/.*?>)$/.exec(html);

    return match ? [match[1] ?? '', match[2] ?? ''] : null;
}

export default Mark.create({
    name: 'markdownHTMLMark',
    addStorage() {
        return {
            markdown: {
                serialize: {
                    open(this: TuiMarkdownContext, _: unknown, mark: ProseMark) {
                        if (!this.editor.storage.markdown.options.html) {
                            console.warn(
                                `Tiptap Markdown: "${mark.type.name}" mark is only available in html mode`,
                            );

                            return '';
                        }

                        return getMarkTags(mark)?.[0] ?? '';
                    },
                    close(this: TuiMarkdownContext, _: unknown, mark: ProseMark): string {
                        return this.editor.storage.markdown.options.html
                            ? (getMarkTags(mark)?.[1] ?? '')
                            : '';
                    },
                },
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
