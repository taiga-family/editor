import {mergeAttributes} from '@tiptap/core';
import {Table} from '@tiptap/extension-table';

import {tuiCreateColGroup} from './create-col-group';

export const TuiTable = Table.extend({
    renderHTML({node, HTMLAttributes}) {
        const {colgroup, tableWidth, tableMinWidth} = tuiCreateColGroup(
            node,
            this.options.cellMinWidth,
        );

        return [
            `div`,
            {class: `tui-table-wrapper`},
            [
                `table`,
                mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                    style: tableWidth
                        ? `width: ${tableWidth}`
                        : `min-width: ${tableMinWidth}`,
                }),
                colgroup,
                [`tbody`, 0],
            ],
        ];
    },
});
