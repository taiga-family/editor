import {
  h
} from "./chunk-Y4YR6BCP.js";
import {
  Node3,
  TextSelection,
  mergeAttributes,
  wrappingInputRule
} from "./chunk-RDCPDP3O.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// node_modules/@tiptap/extension-blockquote/dist/index.js
var handleBackspace = (editor, type) => {
  var _a;
  const {
    state,
    view
  } = editor;
  const {
    selection
  } = state;
  if (!selection.empty) return false;
  const {
    $from
  } = selection;
  if ($from.parentOffset !== 0) return false;
  const parentDepth = $from.depth - 1;
  if (parentDepth < 0) return false;
  const parent = $from.node(parentDepth);
  const index = $from.index(parentDepth);
  if (index === 0) return false;
  if (parent.type === type) {
    return editor.commands.lift(type.name);
  }
  const previous = parent.child(index - 1);
  if (previous.type !== type || !((_a = previous.lastChild) == null ? void 0 : _a.isTextblock)) {
    return false;
  }
  const blockStart = $from.before();
  const insideBlockquoteEnd = blockStart - 1;
  const targetPos = insideBlockquoteEnd - 1;
  const {
    tr
  } = state;
  tr.delete(blockStart, $from.after()).insert(targetPos, $from.parent.content);
  tr.setSelection(TextSelection.create(tr.doc, targetPos));
  view.dispatch(tr.scrollIntoView());
  return true;
};
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
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote(),
      Backspace: () => handleBackspace(this.editor, this.type)
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
//# sourceMappingURL=chunk-DLO7O4OT.js.map
