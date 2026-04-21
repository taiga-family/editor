import {
  Extension
} from "./chunk-U65UEYRO.js";
import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/custom-tool/paste-emoji/examples/1/smiles-tool/emoji.extension.ts
var EmojiExtension = Extension.create({
  name: "emoji",
  addGlobalAttributes() {
    return [
      {
        types: ["paragraph"],
        attributes: {
          dataType: {
            default: "",
            keepOnSplit: false,
            renderHTML: ({ dataType }) => dataType === "emoji" ? { style: "display: inline" } : null,
            parseHTML: (element) => element.getAttribute("data-type")
          }
        }
      }
    ];
  }
});
export {
  EmojiExtension
};
//# sourceMappingURL=chunk-GJN3K46V.js.map
