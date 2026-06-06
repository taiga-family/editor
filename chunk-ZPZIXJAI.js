import {
  tuiCreateMarkBoundaryExitPlugin,
  tuiGetCurrentWordBounds
} from "./chunk-HNVQLPMS.js";
import {
  Mark2 as Mark,
  mergeAttributes
} from "./chunk-QAKA6OWS.js";

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
      setAnchor: (id) => ({ chain, editor }) => {
        const { from, to } = tuiGetCurrentWordBounds(editor);
        return chain().setTextSelection({ from, to }).extendMarkRange("jumpAnchor").setMark("jumpAnchor", { id }).setTextSelection(to).run();
      },
      removeAnchor: () => ({ chain }) => chain().unsetMark(this.name, { extendEmptyMarkRange: true }).run()
    };
  },
  addProseMirrorPlugins() {
    return [tuiCreateMarkBoundaryExitPlugin(this.name)];
  }
});

export {
  TuiJumpAnchor
};
//# sourceMappingURL=chunk-ZPZIXJAI.js.map
