import {
  Extension
} from "./chunk-77B4UB4S.js";

// projects/editor/extensions/indent-outdent/index.ts
function tuiIsListActive(editor) {
  return editor.isActive("bulletList") || editor.isActive("orderedList") || editor.isActive("taskList");
}
var TuiTabExtension = Extension.create({
  name: "indent",
  addKeyboardShortcuts() {
    return {
      Tab: () => tuiIsListActive(this.editor) ? false : this.editor.commands.insertContent("	")
    };
  }
});

export {
  tuiIsListActive,
  TuiTabExtension
};
//# sourceMappingURL=chunk-GMAQM436.js.map
