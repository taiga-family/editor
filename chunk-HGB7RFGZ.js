import {
  Node2 as Node
} from "./chunk-3Z6DR5PV.js";
import "./chunk-KWSTWQNB.js";

// node_modules/@tiptap/extension-document/dist/index.js
var Document = Node.create({
  name: "doc",
  topNode: true,
  content: "block+",
  renderMarkdown: (node, h) => {
    if (!node.content) return "";
    return h.renderChildren(node.content, "\n\n");
  }
});
var src_default = Document;
export {
  Document,
  src_default as default
};
//# sourceMappingURL=chunk-HGB7RFGZ.js.map
