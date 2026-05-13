import {
  Node3
} from "./chunk-77B4UB4S.js";
import "./chunk-KWSTWQNB.js";

// node_modules/@tiptap/extension-text/dist/index.js
var Text = Node3.create({
  name: "text",
  group: "inline",
  parseMarkdown: (token) => {
    return {
      type: "text",
      text: token.text || ""
    };
  },
  renderMarkdown: (node) => node.text || ""
});
var index_default = Text;
export {
  Text,
  index_default as default
};
//# sourceMappingURL=chunk-ISBILZIV.js.map
