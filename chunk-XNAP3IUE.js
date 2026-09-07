import {
  Node2 as Node,
  mergeAttributes
} from "./chunk-3Z6DR5PV.js";
import "./chunk-KWSTWQNB.js";

// node_modules/@tiptap/extension-paragraph/dist/index.js
var EMPTY_PARAGRAPH_MARKDOWN = "&nbsp;";
var NBSP_CHAR = "\xA0";
var Paragraph = Node.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [{
      tag: "p"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["p", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  parseMarkdown: (token, helpers) => {
    const tokens = token.tokens || [];
    if (tokens.length === 1 && tokens[0].type === "image") return helpers.parseChildren([tokens[0]]);
    const content = helpers.parseInline(tokens);
    if (tokens.length === 1 && tokens[0].type === "text" && (tokens[0].raw === EMPTY_PARAGRAPH_MARKDOWN || tokens[0].text === EMPTY_PARAGRAPH_MARKDOWN || tokens[0].raw === NBSP_CHAR || tokens[0].text === NBSP_CHAR) && content.length === 1 && content[0].type === "text" && (content[0].text === EMPTY_PARAGRAPH_MARKDOWN || content[0].text === NBSP_CHAR)) return helpers.createNode("paragraph", void 0, []);
    return helpers.createNode("paragraph", void 0, content);
  },
  renderMarkdown: (node, h, ctx) => {
    if (!node) return "";
    const content = Array.isArray(node.content) ? node.content : [];
    if (content.length === 0) {
      var _ctx$previousNode, _ctx$previousNode2;
      const previousContent = Array.isArray(ctx === null || ctx === void 0 || (_ctx$previousNode = ctx.previousNode) === null || _ctx$previousNode === void 0 ? void 0 : _ctx$previousNode.content) ? ctx.previousNode.content : [];
      return (ctx === null || ctx === void 0 || (_ctx$previousNode2 = ctx.previousNode) === null || _ctx$previousNode2 === void 0 ? void 0 : _ctx$previousNode2.type) === "paragraph" && previousContent.length === 0 ? EMPTY_PARAGRAPH_MARKDOWN : "";
    }
    return h.renderChildren(content);
  },
  addCommands() {
    return {
      setParagraph: () => ({
        commands
      }) => {
        return commands.setNode(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
});
var src_default = Paragraph;
export {
  Paragraph,
  src_default as default
};
//# sourceMappingURL=chunk-XNAP3IUE.js.map
