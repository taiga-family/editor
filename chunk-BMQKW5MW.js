import {
  Extension
} from "./chunk-QAKA6OWS.js";

// projects/editor/extensions/table-cell-background/index.ts
var TableCellBackground = Extension.create({
  addGlobalAttributes() {
    return [
      {
        types: ["tableCell", "tableHeader"],
        attributes: {
          background: {
            default: null,
            renderHTML: ({ background }) => background ? {
              style: `background: ${background}`
            } : null,
            parseHTML: ({ style }) => style.background,
            keepOnSplit: false
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setCellBackground: (background) => ({ chain }) => chain().updateAttributes("tableCell", { background }).updateAttributes("tableHeader", { background }).run(),
      unsetCellBackground: () => ({ chain }) => chain().updateAttributes("tableCell", { background: null }).updateAttributes("tableHeader", { background: null }).run()
    };
  }
});

export {
  TableCellBackground
};
//# sourceMappingURL=chunk-BMQKW5MW.js.map
