import {
  TUI_TIPTAP_WHITESPACE_HACK
} from "./chunk-OP7WYW65.js";
import {
  tuiGetCurrentWordBounds,
  tuiGetSlicedFragment
} from "./chunk-ERL72JEN.js";
import {
  Mark2 as Mark,
  mergeAttributes
} from "./chunk-77B4UB4S.js";

// projects/editor/extensions/jump-anchor/index.ts
var TuiJumpAnchor = Mark.create({
  name: "jumpAnchor",
  priority: 1e3,
  keepOnSplit: false,
  addAttributes() {
    return {
      id: {
        default: null,
        parseHTML: (element) => element.getAttribute("id"),
        renderHTML: (attributes) => attributes.id ? { id: attributes.id } : {}
      }
    };
  },
  parseHTML() {
    return [{ tag: 'a[data-type="jump-anchor"]' }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["a", mergeAttributes({ "data-type": "jump-anchor" }, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setAnchor: (id) => ({ chain, state, editor }) => {
        const { from, to } = tuiGetCurrentWordBounds(editor);
        const sliced = tuiGetSlicedFragment(state);
        const forwardSymbolIsWhitespace = sliced === " ";
        const jumpAnchorMark = chain().setTextSelection({ from, to }).extendMarkRange("jumpAnchor").setMark("jumpAnchor", { id });
        return (forwardSymbolIsWhitespace ? jumpAnchorMark.setTextSelection(to - 1) : jumpAnchorMark.setTextSelection(to).insertContent(TUI_TIPTAP_WHITESPACE_HACK).setTextSelection(to - 1)).run();
      },
      removeAnchor: () => ({ chain }) => chain().unsetMark(this.name, { extendEmptyMarkRange: true }).run()
    };
  }
});

export {
  TuiJumpAnchor
};
//# sourceMappingURL=chunk-SGJOXJMF.js.map
