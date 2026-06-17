import {
  Mark2 as Mark,
  mergeAttributes
} from "./chunk-Q52BLV3K.js";
import "./chunk-KWSTWQNB.js";

// node_modules/@tiptap/extension-superscript/dist/index.js
var Superscript = Mark.create({
  name: "superscript",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [{
      tag: "sup"
    }, {
      style: "vertical-align",
      getAttrs(value) {
        if (value !== "super") {
          return false;
        }
        return null;
      }
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["sup", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setSuperscript: () => ({
        commands
      }) => {
        return commands.setMark(this.name);
      },
      toggleSuperscript: () => ({
        commands
      }) => {
        return commands.toggleMark(this.name);
      },
      unsetSuperscript: () => ({
        commands
      }) => {
        return commands.unsetMark(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-.": () => this.editor.commands.toggleSuperscript()
    };
  }
});
var index_default = Superscript;
export {
  Superscript,
  index_default as default
};
//# sourceMappingURL=chunk-BIVGXZ33.js.map
