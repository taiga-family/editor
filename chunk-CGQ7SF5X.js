import {
  TableCell
} from "./chunk-K4VHZDJ3.js";
import {
  mergeAttributes
} from "./chunk-QAKA6OWS.js";

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
//# sourceMappingURL=chunk-CGQ7SF5X.js.map
