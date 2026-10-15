import {
  Mark2 as Mark,
  mergeAttributes
} from "./chunk-42BGUG2S.js";
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
        if (value !== "super") return false;
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
var src_default = Superscript;
export {
  Superscript,
  src_default as default
};
//# sourceMappingURL=chunk-E2IVT2HI.js.map
