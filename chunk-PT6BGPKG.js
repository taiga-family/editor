import {
  h
} from "./chunk-Y4YR6BCP.js";
import {
  Node3,
  mergeAttributes,
  wrappingInputRule
} from "./chunk-77B4UB4S.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// node_modules/@tiptap/extension-blockquote/dist/index.js
var inputRegex = /^\s*>\s$/;
var Blockquote = Node3.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: true,
  parseHTML() {
    return [{
      tag: "blockquote"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return /* @__PURE__ */ h("blockquote", __spreadProps(__spreadValues({}, mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)), {
      children: /* @__PURE__ */ h("slot", {})
    }));
  },
  parseMarkdown: (token, helpers) => {
    var _a;
    const parseBlockChildren = (_a = helpers.parseBlockChildren) != null ? _a : helpers.parseChildren;
    return helpers.createNode("blockquote", void 0, parseBlockChildren(token.tokens || []));
  },
  renderMarkdown: (node, h2) => {
    if (!node.content) {
      return "";
    }
    const prefix = ">";
    const result = [];
    node.content.forEach((child, index) => {
      var _a, _b;
      const childContent = (_b = (_a = h2.renderChild) == null ? void 0 : _a.call(h2, child, index)) != null ? _b : h2.renderChildren([child]);
      const lines = childContent.split("\n");
      const linesWithPrefix = lines.map((line) => {
        if (line.trim() === "") {
          return prefix;
        }
        return `${prefix} ${line}`;
      });
      result.push(linesWithPrefix.join("\n"));
    });
    return result.join(`
${prefix}
`);
  },
  addCommands() {
    return {
      setBlockquote: () => ({
        commands
      }) => {
        return commands.wrapIn(this.name);
      },
      toggleBlockquote: () => ({
        commands
      }) => {
        return commands.toggleWrap(this.name);
      },
      unsetBlockquote: () => ({
        commands
      }) => {
        return commands.lift(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [wrappingInputRule({
      find: inputRegex,
      type: this.type
    })];
  }
});
var index_default = Blockquote;
export {
  Blockquote,
  index_default as default,
  inputRegex
};
//# sourceMappingURL=chunk-PT6BGPKG.js.map
