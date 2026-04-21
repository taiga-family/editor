import {
  Node2 as Node,
  mergeAttributes
} from "./chunk-U65UEYRO.js";
import "./chunk-4MWRP73S.js";

// node_modules/@tiptap/extension-table-row/dist/index.js
var TableRow = Node.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [{
      tag: "tr"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["tr", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  }
});
export {
  TableRow,
  TableRow as default
};
//# sourceMappingURL=chunk-CKUHTRRF.js.map
