import {
  Extension
} from "./chunk-42BGUG2S.js";

// projects/editor/extensions/font-size/index.ts
var TuiFontSizeExtension = Extension.create({
  name: "fontSize",
  addOptions() {
    return { types: ["textStyle"] };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: ({ style }) => style.fontSize,
            renderHTML: ({ fontSize }) => fontSize ? { style: `font-size: ${fontSize}` } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontSize: (fontSize) => ({ chain }) => chain().setMark("textStyle", { fontSize }).run(),
      unsetFontSize: () => ({ chain }) => chain().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
    };
  }
});

export {
  TuiFontSizeExtension
};
//# sourceMappingURL=chunk-WTWKXZU6.js.map
