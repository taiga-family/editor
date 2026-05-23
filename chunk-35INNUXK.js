import {
  TableCell
} from "./chunk-HEWXKLLS.js";
import {
  mergeAttributes
} from "./chunk-LXNO5FKD.js";

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
//# sourceMappingURL=chunk-35INNUXK.js.map
