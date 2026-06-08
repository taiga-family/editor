import {
  Link
} from "./chunk-3N57KBZI.js";
import {
  tuiCreateMarkBoundaryExitPlugin,
  tuiGetCurrentWordBounds,
  tuiGetSlicedFragment,
  tuiParseNodeAttributes
} from "./chunk-HNVQLPMS.js";
import {
  mergeAttributes
} from "./chunk-QAKA6OWS.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// projects/editor/extensions/link/index.ts
var TuiLink = Link.extend({
  addAttributes() {
    return __spreadValues(__spreadValues({}, this.parent?.()), tuiParseNodeAttributes(["download"]));
  },
  addCommands() {
    return __spreadProps(__spreadValues({}, this.parent?.()), {
      toggleLink: (attributes) => ({ chain, state, editor }) => {
        {
          const pos = state.selection.from;
          const resolvedPos = state.doc.resolve(pos);
          const node = resolvedPos.nodeAfter || resolvedPos.nodeBefore;
          const isImageNode = node?.type === editor.schema.nodes.image;
          if (isImageNode) {
            const commands = editor.commands;
            return typeof commands.setImageLink === "function" ? commands.setImageLink() : false;
          }
          if (!tuiGetSlicedFragment(state).trim()) {
            return false;
          }
          const { from, to } = tuiGetCurrentWordBounds(editor);
          const toggleMark = chain().setTextSelection({ from, to }).toggleMark(this.name, attributes, {
            extendEmptyMarkRange: true
          }).setMeta("preventAutolink", true).setTextSelection(to);
          return toggleMark.setTextSelection({
            from,
            to: to - from === 1 ? to : to - 1
          }).run();
        }
      }
    });
  },
  renderHTML({ HTMLAttributes }) {
    const target = HTMLAttributes.href?.startsWith("#") ? "_self" : HTMLAttributes.target ?? "_blank";
    return ["a", mergeAttributes(HTMLAttributes, { target }), 0];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-k": ({ editor }) => {
        const isLink = this.editor.isActive("link");
        const editorChain = editor.chain().focus();
        const command = isLink ? editorChain.unsetLink() : editorChain.toggleLink({ href: "" });
        return command.run();
      }
    };
  },
  addProseMirrorPlugins() {
    return [...this.parent?.() ?? [], tuiCreateMarkBoundaryExitPlugin(this.name)];
  },
  addPasteRules() {
    return [
      // Workaround for issue: https://github.com/ueberdosis/tiptap/issues/5957
    ];
  }
}).configure({ openOnClick: false });

export {
  TuiLink
};
//# sourceMappingURL=chunk-4UWTSVE2.js.map
