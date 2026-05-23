import {
  Table,
  createColGroup
} from "./chunk-HEWXKLLS.js";
import {
  mergeAttributes
} from "./chunk-LXNO5FKD.js";

// projects/editor/extensions/table/index.ts
var TuiTable = Table.extend({
  renderHTML({ node, HTMLAttributes }) {
    const { colgroup, tableWidth, tableMinWidth } = createColGroup(node, this.options.cellMinWidth);
    return [
      "div",
      { class: "tui-table-wrapper" },
      [
        "table",
        mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
          style: tableWidth ? `width: ${tableWidth}` : `min-width: ${tableMinWidth}`
        }),
        colgroup,
        ["tbody", 0]
      ]
    ];
  }
}).configure({
  resizable: true,
  lastColumnResizable: true,
  allowTableNodeSelection: true
}).extend();

export {
  TuiTable
};
//# sourceMappingURL=chunk-CQCVA6IH.js.map
