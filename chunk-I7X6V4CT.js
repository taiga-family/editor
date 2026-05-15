import {
  TableCell
} from "./chunk-75FDNOQF.js";
import {
  mergeAttributes
} from "./chunk-77B4UB4S.js";

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
//# sourceMappingURL=chunk-I7X6V4CT.js.map
