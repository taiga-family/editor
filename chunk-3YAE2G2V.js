import {
  Extension
} from "./chunk-77B4UB4S.js";

// projects/editor/extensions/enter/index.ts
var TuiCustomEnter = Extension.create({
  name: "customEnter",
  addKeyboardShortcuts() {
    return {
      Enter: ({ editor }) => {
        if (editor.isActive("summary")) {
          editor.commands.selectNodeForward();
          editor.commands.focus(editor.state.selection.anchor + 1);
          if (globalThis.document) {
            editor.view.nodeDOM(editor.state.selection.anchor)?.parentElement?.closest("details")?.querySelector('[data-type="details-content"]')?.prepend(document.createElement("p"));
          }
          return false;
        }
        return this.editor.chain().createParagraphNear().run();
      }
    };
  }
});

export {
  TuiCustomEnter
};
//# sourceMappingURL=chunk-3YAE2G2V.js.map
