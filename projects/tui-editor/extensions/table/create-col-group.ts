import {DOMOutputSpec, Node as ProseMirrorNode} from '@tiptap/pm/model';

interface TuiCreateColGroupResult {
    colgroup: readonly [string, ...any[]];
    tableWidth: string;
    tableMinWidth: string;
}

export function tuiCreateColGroup(
    node: ProseMirrorNode,
    cellMinWidth: number,
    overrideCol?: number,
    overrideValue?: any,
): Partial<TuiCreateColGroupResult> {
    let totalWidth = 0;
    let fixedWidth = true;
    const cols: DOMOutputSpec[] = [];
    const row = node.firstChild;

    if (!row) {
        return {};
    }

    for (let i = 0, col = 0; i < row.childCount; i += 1) {
        const {colspan, colwidth} = row.child(i).attrs;

        for (let j = 0; j < colspan; j += 1, col += 1) {
            const hasWidth = overrideCol === col ? overrideValue : colwidth?.[j];
            const cssWidth = hasWidth ? `${hasWidth}px` : ``;

            totalWidth += hasWidth || cellMinWidth;

            if (!hasWidth) {
                fixedWidth = false;
            }

            cols.push([`col`, cssWidth ? {style: `width: ${cssWidth}`} : {}]);
        }
    }

    const tableWidth = fixedWidth ? `${totalWidth}px` : ``;
    const tableMinWidth = fixedWidth ? `` : `${totalWidth}px`;

    const colgroup: DOMOutputSpec = [`colgroup`, {}, ...cols];

    return {colgroup, tableWidth, tableMinWidth};
}
