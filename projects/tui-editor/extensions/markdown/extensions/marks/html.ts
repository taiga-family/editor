import {Editor, getHTMLFromFragment, Mark} from '@tiptap/core';
import {Fragment} from '@tiptap/pm/model';
import {Mark as ProseMark} from 'prosemirror-model';

function getMarkTags(mark: ProseMark): string[] | null {
    const schema = mark.type.schema;
    const node = schema.text(` `, [mark]);
    const html = getHTMLFromFragment(Fragment.from(node), schema);
    const match = html.match(/^(<.*?>) (<\/.*?>)$/);

    return match ? [match[1], match[2]] : null;
}

export default Mark.create({
    name: `markdownHTMLMark`,
    addStorage() {
        return {
            markdown: {
                serialize: {
                    open(_: any, mark: ProseMark) {
                        if (
                            !((this as any).editor as Editor)?.storage.markdown.options
                                .html
                        ) {
                            console.warn(
                                `Tiptap Markdown: "${mark.type.name}" mark is only available in html mode`,
                            );

                            return ``;
                        }

                        return getMarkTags(mark)?.[0] ?? ``;
                    },
                    close(_: any, mark: ProseMark): string {
                        if (
                            !((this as any).editor as Editor)?.storage.markdown.options
                                .html
                        ) {
                            return ``;
                        }

                        return getMarkTags(mark)?.[1] ?? ``;
                    },
                },
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
