import {
  Node2 as Node,
  mergeAttributes
} from "./chunk-U65UEYRO.js";
import "./chunk-4MWRP73S.js";

// node_modules/@tiptap/extension-table-header/dist/index.js
var TableHeader = Node.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (element) => {
          const colwidth = element.getAttribute("colwidth");
          const value = colwidth ? colwidth.split(",").map((width) => parseInt(width, 10)) : null;
          return value;
        }
      }
    };
  },
  tableRole: "header_cell",
  isolating: true,
  parseHTML() {
    return [{
      tag: "th"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["th", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  }
});
export {
  TableHeader,
  TableHeader as default
};
//# sourceMappingURL=chunk-LFOBYHOW.js.map
