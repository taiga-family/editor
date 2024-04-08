import {Node} from '@tiptap/core';
import type {Node as ProseNode} from 'prosemirror-model';

import {tuiChildNodes} from '../../util/prosemirror';
import HTMLNode from './html';

export default Node.create({
    name: 'table',
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize(state: any, node: ProseNode, parent: ProseNode) {
                    if (!isMarkdownSerializable(node)) {
                        HTMLNode.storage.markdown.serialize.call(
                            this,
                            state,
                            node,
                            parent,
                        );

                        return;
                    }

                    state.inTable = true;

                    node.forEach((row: ProseNode, _p: number, i: number) => {
                        state.write('| ');

                        row.forEach((col: ProseNode, __p: number, j: number) => {
                            if (j) {
                                state.write(' | ');
                            }

                            const cellContent = col.firstChild;

                            if (cellContent?.textContent.trim()) {
                                state.renderInline(cellContent);
                            }
                        });

                        state.write(' |');
                        state.ensureNewLine();

                        if (!i) {
                            const delimiterRow = Array.from({length: row.childCount})
                                .map(() => '---')
                                .join(' | ');

                            state.write(`| ${delimiterRow} |`);
                            state.ensureNewLine();
                        }
                    });

                    state.closeBlock(node);
                    state.inTable = false;
                },
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});

function hasSpan(node: ProseNode): boolean {
    return node.attrs.colspan > 1 || node.attrs.rowspan > 1;
}

function isMarkdownSerializable(node: ProseNode): boolean {
    const rows = tuiChildNodes(node);
    const firstRow = rows[0];
    const bodyRows = rows.slice(1);

    if (
        tuiChildNodes(firstRow).some(
            cell =>
                cell.type.name !== 'tableHeader' || hasSpan(cell) || cell.childCount > 1,
        )
    ) {
        return false;
    }

    return !bodyRows.some(row =>
        tuiChildNodes(row).some(
            cell =>
                cell.type.name === 'tableHeader' || hasSpan(cell) || cell.childCount > 1,
        ),
    );
}
