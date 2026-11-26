import {
  Node2 as Node
} from "./chunk-42BGUG2S.js";
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
//# sourceMappingURL=chunk-HT4MRLS3.js.map
