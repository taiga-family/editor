import {
  Extension
} from "./chunk-QYO3DBNN.js";

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
//# sourceMappingURL=chunk-IDGNFT5E.js.map
