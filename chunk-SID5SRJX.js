import {
  Extension
} from "./chunk-LXNO5FKD.js";

// projects/editor/extensions/background-color/index.ts
var TuiBackgroundColor = Extension.create({
  name: "backgroundColor",
  addOptions() {
    return { types: ["textStyle"] };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          backgroundColor: {
            default: null,
            renderHTML: ({ backgroundColor }) => backgroundColor ? {
              style: `background-color: ${backgroundColor}`
            } : {},
            parseHTML: ({ style }) => style.backgroundColor.replaceAll(/['"]+/g, ""),
            keepOnSplit: false
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setBackgroundColor: (backgroundColor) => ({ chain }) => chain().setMark("textStyle", { backgroundColor }).run(),
      unsetBackgroundColor: () => ({ chain }) => chain().setMark("textStyle", { backgroundColor: null }).run()
    };
  }
});

export {
  TuiBackgroundColor
};
//# sourceMappingURL=chunk-SID5SRJX.js.map
