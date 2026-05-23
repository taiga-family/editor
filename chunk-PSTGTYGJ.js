import {
  Extension
} from "./chunk-LXNO5FKD.js";

// projects/editor/extensions/font-color/index.ts
var TuiFontColor = Extension.create({
  name: "fontColor",
  addOptions() {
    return { types: ["textStyle"] };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontColor: {
            default: null,
            renderHTML: ({ fontColor }) => fontColor ? {
              style: `color: ${fontColor}`
            } : {},
            parseHTML: ({ style }) => style.color.replaceAll(/['"]+/g, ""),
            keepOnSplit: false
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontColor: (fontColor) => ({ chain }) => chain().setMark("textStyle", { fontColor }).run(),
      unsetFontColor: () => ({ chain }) => chain().setMark("textStyle", { fontColor: null }).run()
    };
  }
});

export {
  TuiFontColor
};
//# sourceMappingURL=chunk-PSTGTYGJ.js.map
