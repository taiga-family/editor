import {
  Mark2 as Mark,
  getStyleProperty,
  markInputRule,
  markPasteRule,
  mergeAttributes
} from "./chunk-Q52BLV3K.js";
import "./chunk-KWSTWQNB.js";

// node_modules/@tiptap/extension-highlight/dist/index.js
var inputRegex = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/;
var pasteRegex = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g;
var Highlight = Mark.create({
  name: "highlight",
  addOptions() {
    return {
      multicolor: false,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    if (!this.options.multicolor) {
      return {};
    }
    return {
      color: {
        default: null,
        // Prefer `data-color` (set by our own `renderHTML`) for lossless
        // round-trips. Otherwise parse the raw inline `style` attribute so
        // the original color format (e.g. `#rrggbb`) is preserved instead of
        // the canonicalized `rgb(...)` value from `element.style.backgroundColor`.
        parseHTML: (element) => element.getAttribute("data-color") || getStyleProperty(element, "background-color") || element.style.backgroundColor,
        renderHTML: (attributes) => {
          if (!attributes.color) {
            return {};
          }
          return {
            "data-color": attributes.color,
            style: `background-color: ${attributes.color}; color: inherit`
          };
        }
      }
    };
  },
  parseHTML() {
    return [{
      tag: "mark"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["mark", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  renderMarkdown: (node, h) => {
    return `==${h.renderChildren(node)}==`;
  },
  parseMarkdown: (token, h) => {
    return h.applyMark("highlight", h.parseInline(token.tokens || []));
  },
  markdownTokenizer: {
    name: "highlight",
    level: "inline",
    start: (src) => src.indexOf("=="),
    tokenize(src, _, h) {
      const rule = /^(==)([^=]+)(==)/;
      const match = rule.exec(src);
      if (match) {
        const innerContent = match[2].trim();
        const children = h.inlineTokens(innerContent);
        return {
          type: "highlight",
          raw: match[0],
          text: innerContent,
          tokens: children
        };
      }
    }
  },
  addCommands() {
    return {
      setHighlight: (attributes) => ({
        commands
      }) => {
        return commands.setMark(this.name, attributes);
      },
      toggleHighlight: (attributes) => ({
        commands
      }) => {
        return commands.toggleMark(this.name, attributes);
      },
      unsetHighlight: () => ({
        commands
      }) => {
        return commands.unsetMark(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-h": () => this.editor.commands.toggleHighlight()
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
var index_default = Highlight;
export {
  Highlight,
  index_default as default,
  inputRegex,
  pasteRegex
};
//# sourceMappingURL=chunk-BUF3VQAM.js.map
