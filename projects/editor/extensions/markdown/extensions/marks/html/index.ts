import {type Editor, getHTMLFromFragment, Mark} from '@tiptap/core';
import {Fragment, type Mark as ProseMark} from '@tiptap/pm/model';

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
                    open(_: any, mark: ProseMark) {
                        if (
                            !((this as any).editor as Editor | undefined)?.storage
                                .markdown.options.html
                        ) {
                            console.warn(
                                `Tiptap Markdown: "${mark.type.name}" mark is only available in html mode`,
                            );

                            return '';
                        }

                        return getMarkTags(mark)?.[0] ?? '';
                    },
                    close(_: any, mark: ProseMark): string {
                        if (
                            !((this as any).editor as Editor | undefined)?.storage
                                .markdown.options.html
                        ) {
                            return '';
                        }

                        return getMarkTags(mark)?.[1] ?? '';
                    },
                },
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
