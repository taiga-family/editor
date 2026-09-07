import {
  Node2 as Node
} from "./chunk-3Z6DR5PV.js";
import "./chunk-KWSTWQNB.js";

// node_modules/@tiptap/extension-text/dist/index.js
var Text = Node.create({
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
var src_default = Text;
export {
  Text,
  src_default as default
};
//# sourceMappingURL=chunk-5XS2M2EQ.js.map
