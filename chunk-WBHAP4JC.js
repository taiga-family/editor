import {
  Node2 as Node,
  mergeAttributes,
  wrappingInputRule
} from "./chunk-U65UEYRO.js";
import {
  __objRest,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/@tiptap/extension-ordered-list/dist/index.js
var ListItemName = "listItem";
var TextStyleName = "textStyle";
var inputRegex = /^(\d+)\.\s$/;
var OrderedList = Node.create({
  name: "orderedList",
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
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (element) => {
          return element.hasAttribute("start") ? parseInt(element.getAttribute("start") || "", 10) : 1;
        }
      },
      type: {
        default: null,
        parseHTML: (element) => element.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [{
      tag: "ol"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    const _a = HTMLAttributes, {
      start
    } = _a, attributesWithoutStart = __objRest(_a, [
      "start"
    ]);
    return start === 1 ? ["ol", mergeAttributes(this.options.HTMLAttributes, attributesWithoutStart), 0] : ["ol", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({
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
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let inputRule = wrappingInputRule({
      find: inputRegex,
      type: this.type,
      getAttributes: (match) => ({
        start: +match[1]
      }),
      joinPredicate: (match, node) => node.childCount + node.attrs.start === +match[1]
    });
    if (this.options.keepMarks || this.options.keepAttributes) {
      inputRule = wrappingInputRule({
        find: inputRegex,
        type: this.type,
        keepMarks: this.options.keepMarks,
        keepAttributes: this.options.keepAttributes,
        getAttributes: (match) => __spreadValues({
          start: +match[1]
        }, this.editor.getAttributes(TextStyleName)),
        joinPredicate: (match, node) => node.childCount + node.attrs.start === +match[1],
        editor: this.editor
      });
    }
    return [inputRule];
  }
});

export {
  inputRegex,
  OrderedList
};
//# sourceMappingURL=chunk-WBHAP4JC.js.map
