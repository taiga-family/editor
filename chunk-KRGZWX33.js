import {
  Node2 as Node
} from "./chunk-42BGUG2S.js";
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
//# sourceMappingURL=chunk-KRGZWX33.js.map
