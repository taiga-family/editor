import {
  h
} from "./chunk-5WCTM4ZV.js";
import {
  Node2 as Node,
  Slice,
  TextSelection,
  mergeAttributes,
  wrappingInputRule
} from "./chunk-42BGUG2S.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// node_modules/@tiptap/extension-blockquote/dist/index.js
var handleBackspace = (editor, type) => {
  var _previous$lastChild;
  const {
    state
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
  if (parent.type === type) return editor.commands.lift(type.name);
  const previous = parent.child(index - 1);
  if (previous.type !== type || !((_previous$lastChild = previous.lastChild) === null || _previous$lastChild === void 0 ? void 0 : _previous$lastChild.isTextblock)) return false;
  const targetPos = $from.before() - 1 - 1;
  return editor.commands.command(({
    tr,
    dispatch
  }) => {
    if (!dispatch) return true;
    const content = $from.parent.content;
    const slice = new Slice(content, 0, 0);
    tr.replace(targetPos, $from.after(), slice);
    tr.setSelection(TextSelection.create(tr.doc, targetPos + content.size));
    tr.scrollIntoView();
    dispatch(tr);
    return true;
  });
};
var inputRegex = /^\s*>\s$/;
var Blockquote = Node.create({
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
    var _helpers$parseBlockCh;
    const parseBlockChildren = (_helpers$parseBlockCh = helpers.parseBlockChildren) !== null && _helpers$parseBlockCh !== void 0 ? _helpers$parseBlockCh : helpers.parseChildren;
    return helpers.createNode("blockquote", void 0, parseBlockChildren(token.tokens || []));
  },
  renderMarkdown: (node, h2) => {
    if (!node.content) return "";
    const prefix = ">";
    const result = [];
    node.content.forEach((child, index) => {
      var _h$renderChild, _h$renderChild2;
      const linesWithPrefix = ((_h$renderChild = (_h$renderChild2 = h2.renderChild) === null || _h$renderChild2 === void 0 ? void 0 : _h$renderChild2.call(h2, child, index)) !== null && _h$renderChild !== void 0 ? _h$renderChild : h2.renderChildren([child])).split("\n").map((line) => {
        if (line.trim() === "") return prefix;
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
var src_default = Blockquote;
export {
  Blockquote,
  src_default as default,
  inputRegex
};
//# sourceMappingURL=chunk-4WRDWVCE.js.map
