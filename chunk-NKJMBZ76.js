import {
  gapCursor
} from "./chunk-CW45XSAV.js";
import {
  Extension,
  callOrReturn,
  getExtensionField
} from "./chunk-OPLENYEC.js";

// node_modules/@tiptap/extension-gapcursor/dist/index.js
var Gapcursor = Extension.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [gapCursor()];
  },
  extendNodeSchema(extension) {
    var _a;
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage
    };
    return {
      allowGapCursor: (_a = callOrReturn(getExtensionField(extension, "allowGapCursor", context))) !== null && _a !== void 0 ? _a : null
    };
  }
});

export {
  Gapcursor
};
//# sourceMappingURL=chunk-NKJMBZ76.js.map
