import {mergeAttributes} from '@tiptap/core';
import TableCell from '@tiptap/extension-table-cell';

export const TuiTableCell = TableCell.extend({
    renderHTML({HTMLAttributes}) {
        const attrs = mergeAttributes(this.options.HTMLAttributes, HTMLAttributes);

        if (attrs.colwidth) {
            attrs.style = `width: ${attrs.colwidth}px`;
        }

        return ['td', attrs, 0];
    },
});
