import {
  TableCell
} from "./chunk-7TYTEEOQ.js";
import {
  mergeAttributes
} from "./chunk-3Z6DR5PV.js";

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
//# sourceMappingURL=chunk-KHDUIXS3.js.map
