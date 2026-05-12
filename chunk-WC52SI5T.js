import {
  Extension
} from "./chunk-77B4UB4S.js";
import "./chunk-KWSTWQNB.js";

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
//# sourceMappingURL=chunk-WC52SI5T.js.map
