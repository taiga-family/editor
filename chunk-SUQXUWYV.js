import {
  Mark2 as Mark,
  markInputRule,
  markPasteRule,
  mergeAttributes
} from "./chunk-77B4UB4S.js";
import "./chunk-KWSTWQNB.js";

// node_modules/@tiptap/extension-code/dist/index.js
var inputRegex = /(^|[^`])`([^`]+)`(?!`)$/;
var pasteRegex = /(^|[^`])`([^`]+)`(?!`)/g;
var Code = Mark.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: true,
  exitable: true,
  parseHTML() {
    return [{
      tag: "code"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["code", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  markdownTokenName: "codespan",
  parseMarkdown: (token, helpers) => {
    return helpers.applyMark("code", [{
      type: "text",
      text: token.text || ""
    }]);
  },
  renderMarkdown: (node, h) => {
    if (!node.content) {
      return "";
    }
    return `\`${h.renderChildren(node.content)}\``;
  },
  addCommands() {
    return {
      setCode: () => ({
        commands
      }) => {
        return commands.setMark(this.name);
      },
      toggleCode: () => ({
        commands
      }) => {
        return commands.toggleMark(this.name);
      },
      unsetCode: () => ({
        commands
      }) => {
        return commands.unsetMark(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [markInputRule({
      find: inputRegex,
      type: this.type
    })];
  },
  addPasteRules() {
    return [markPasteRule({
      find: pasteRegex,
      type: this.type
    })];
  }
});
var index_default = Code;
export {
  Code,
  index_default as default,
  inputRegex,
  pasteRegex
};
//# sourceMappingURL=chunk-SUQXUWYV.js.map
