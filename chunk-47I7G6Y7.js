import {
  TableCell
} from "./chunk-BOWF7HQR.js";
import {
  mergeAttributes
} from "./chunk-RDCPDP3O.js";

// projects/editor/extensions/table-cell/index.ts
var TuiTableCell = TableCell.extend({
  renderHTML({ HTMLAttributes }) {
    const attrs = mergeAttributes(this.options.HTMLAttributes, HTMLAttributes);
    if (attrs.colwidth) {
      attrs.style = `width: ${attrs.colwidth}px; ${attrs.style}`;
    }
    return ["td", attrs, 0];
  }
});

export {
  TuiTableCell
};
//# sourceMappingURL=chunk-47I7G6Y7.js.map
