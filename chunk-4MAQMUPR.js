import {
  Node3
} from "./chunk-77B4UB4S.js";

// node_modules/@tiptap/extension-document/dist/index.js
var Document = Node3.create({
  name: "doc",
  topNode: true,
  content: "block+",
  renderMarkdown: (node, h) => {
    if (!node.content) {
      return "";
    }
    return h.renderChildren(node.content, "\n\n");
  }
});
var index_default = Document;

export {
  Document,
  index_default
};
//# sourceMappingURL=chunk-4MAQMUPR.js.map
