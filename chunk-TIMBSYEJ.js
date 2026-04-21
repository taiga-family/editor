import {
  Decoration,
  DecorationSet,
  Extension,
  Plugin,
  PluginKey
} from "./chunk-U65UEYRO.js";
import "./chunk-4MWRP73S.js";

// node_modules/@tiptap/extension-focus/dist/index.js
var FocusClasses = Extension.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [new Plugin({
      key: new PluginKey("focus"),
      props: {
        decorations: ({
          doc,
          selection
        }) => {
          const {
            isEditable,
            isFocused
          } = this.editor;
          const {
            anchor
          } = selection;
          const decorations = [];
          if (!isEditable || !isFocused) {
            return DecorationSet.create(doc, []);
          }
          let maxLevels = 0;
          if (this.options.mode === "deepest") {
            doc.descendants((node, pos) => {
              if (node.isText) {
                return;
              }
              const isCurrent = anchor >= pos && anchor <= pos + node.nodeSize - 1;
              if (!isCurrent) {
                return false;
              }
              maxLevels += 1;
            });
          }
          let currentLevel = 0;
          doc.descendants((node, pos) => {
            if (node.isText) {
              return false;
            }
            const isCurrent = anchor >= pos && anchor <= pos + node.nodeSize - 1;
            if (!isCurrent) {
              return false;
            }
            currentLevel += 1;
            const outOfScope = this.options.mode === "deepest" && maxLevels - currentLevel > 0 || this.options.mode === "shallowest" && currentLevel > 1;
            if (outOfScope) {
              return this.options.mode === "deepest";
            }
            decorations.push(Decoration.node(pos, pos + node.nodeSize, {
              class: this.options.className
            }));
          });
          return DecorationSet.create(doc, decorations);
        }
      }
    })];
  }
});
export {
  FocusClasses,
  FocusClasses as default
};
//# sourceMappingURL=chunk-TIMBSYEJ.js.map
