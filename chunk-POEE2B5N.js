import {
  Node2 as Node,
  mergeAttributes,
  wrappingInputRule
} from "./chunk-OPLENYEC.js";

// node_modules/@tiptap/extension-bullet-list/dist/index.js
var ListItemName = "listItem";
var TextStyleName = "textStyle";
var inputRegex = /^\s*([-+*])\s$/;
var BulletList = Node.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: false,
      keepAttributes: false
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [{
      tag: "ul"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["ul", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({
        commands,
        chain
      }) => {
        if (this.options.keepAttributes) {
          return chain().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(ListItemName, this.editor.getAttributes(TextStyleName)).run();
        }
        return commands.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let inputRule = wrappingInputRule({
      find: inputRegex,
      type: this.type
    });
    if (this.options.keepMarks || this.options.keepAttributes) {
      inputRule = wrappingInputRule({
        find: inputRegex,
        type: this.type,
        keepMarks: this.options.keepMarks,
        keepAttributes: this.options.keepAttributes,
        getAttributes: () => {
          return this.editor.getAttributes(TextStyleName);
        },
        editor: this.editor
      });
    }
    return [inputRule];
  }
});

export {
  inputRegex,
  BulletList
};
//# sourceMappingURL=chunk-POEE2B5N.js.map
