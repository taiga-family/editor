import {
  Link
} from "./chunk-KTNJ5Y6T.js";
import {
  tuiGetCurrentWordBounds,
  tuiGetSlicedFragment,
  tuiParseNodeAttributes
} from "./chunk-ERL72JEN.js";
import {
  Plugin,
  PluginKey,
  TextSelection,
  mergeAttributes
} from "./chunk-77B4UB4S.js";
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
            return typeof editor.commands.setImageLink === "function" ? chain().setImageLink().run() : false;
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
    return [
      "a",
      mergeAttributes(HTMLAttributes, {
        target: HTMLAttributes.href?.startsWith("#") ? "_self" : "_blank"
      }),
      0
    ];
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
    return [
      ...this.parent?.() ?? [],
      new Plugin({
        key: new PluginKey("tui-link-boundary-exit"),
        appendTransaction(transactions, _oldState, newState) {
          if (!transactions.some((transaction) => transaction.selectionSet)) {
            return null;
          }
          const { selection } = newState;
          if (!(selection instanceof TextSelection) || !selection.$cursor) {
            return null;
          }
          const { $cursor } = selection;
          const linkMark = newState.schema.marks["link"];
          if (!linkMark) {
            return null;
          }
          const linkBefore = $cursor.nodeBefore ? linkMark.isInSet($cursor.nodeBefore.marks) : null;
          const linkAfter = $cursor.nodeAfter ? linkMark.isInSet($cursor.nodeAfter.marks) : null;
          if (!linkBefore || linkAfter) {
            return null;
          }
          const storedMarks = newState.storedMarks ?? $cursor.marks();
          return storedMarks.some((mark) => mark.type === linkMark) ? newState.tr.setStoredMarks(storedMarks.filter((mark) => mark.type !== linkMark)) : null;
        }
      })
    ];
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
//# sourceMappingURL=chunk-6VXROOO5.js.map
