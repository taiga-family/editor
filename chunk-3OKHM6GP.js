import {
  Mark2 as Mark,
  markInputRule,
  markPasteRule,
  mergeAttributes
} from "./chunk-QYO3DBNN.js";
import "./chunk-KWSTWQNB.js";

// node_modules/@tiptap/extension-strike/dist/index.js
var inputRegex = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/;
var pasteRegex = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g;
var Strike = Mark.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [{
      tag: "s"
    }, {
      tag: "del"
    }, {
      tag: "strike"
    }, {
      style: "text-decoration",
      consuming: false,
      getAttrs: (style) => style.includes("line-through") ? {} : false
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["s", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  markdownTokenName: "del",
  parseMarkdown: (token, helpers) => {
    return helpers.applyMark("strike", helpers.parseInline(token.tokens || []));
  },
  renderMarkdown: (node, h) => {
    return `~~${h.renderChildren(node)}~~`;
  },
  addCommands() {
    return {
      setStrike: () => ({
        commands
      }) => {
        return commands.setMark(this.name);
      },
      toggleStrike: () => ({
        commands
      }) => {
        return commands.toggleMark(this.name);
      },
      unsetStrike: () => ({
        commands
      }) => {
        return commands.unsetMark(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
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
var index_default = Strike;
export {
  Strike,
  index_default as default,
  inputRegex,
  pasteRegex
};
//# sourceMappingURL=chunk-3OKHM6GP.js.map
