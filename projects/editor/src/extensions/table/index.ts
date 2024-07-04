import {mergeAttributes} from '@tiptap/core';
import {createColGroup, Table} from '@tiptap/extension-table';

export const TuiTable = Table.extend({
    renderHTML({node, HTMLAttributes}) {
        const {colgroup, tableWidth, tableMinWidth} = createColGroup(
            node,
            this.options.cellMinWidth,
        );

        return [
            'div',
            {class: 'tui-table-wrapper'},
            [
                'table',
                mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                    style: tableWidth
                        ? `width: ${tableWidth}`
                        : `min-width: ${tableMinWidth}`,
                }),
                colgroup,
                ['tbody', 0],
            ],
        ];
    },
})
    .configure({resizable: true})
    .extend();
