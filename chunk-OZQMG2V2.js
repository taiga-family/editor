import {
  Decoration,
  DecorationSet,
  Extension,
  Plugin,
  PluginKey,
  isNodeEmpty
} from "./chunk-OPLENYEC.js";

// node_modules/@tiptap/extension-placeholder/dist/index.js
var Placeholder = Extension.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something \u2026",
      showOnlyWhenEditable: true,
      showOnlyCurrent: true,
      includeChildren: false
    };
  },
  addProseMirrorPlugins() {
    return [new Plugin({
      key: new PluginKey("placeholder"),
      props: {
        decorations: ({
          doc,
          selection
        }) => {
          const active = this.editor.isEditable || !this.options.showOnlyWhenEditable;
          const {
            anchor
          } = selection;
          const decorations = [];
          if (!active) {
            return null;
          }
          const isEmptyDoc = this.editor.isEmpty;
          doc.descendants((node, pos) => {
            const hasAnchor = anchor >= pos && anchor <= pos + node.nodeSize;
            const isEmpty = !node.isLeaf && isNodeEmpty(node);
            if ((hasAnchor || !this.options.showOnlyCurrent) && isEmpty) {
              const classes = [this.options.emptyNodeClass];
              if (isEmptyDoc) {
                classes.push(this.options.emptyEditorClass);
              }
              const decoration = Decoration.node(pos, pos + node.nodeSize, {
                class: classes.join(" "),
                "data-placeholder": typeof this.options.placeholder === "function" ? this.options.placeholder({
                  editor: this.editor,
                  node,
                  pos,
                  hasAnchor
                }) : this.options.placeholder
              });
              decorations.push(decoration);
            }
            return this.options.includeChildren;
          });
          return DecorationSet.create(doc, decorations);
        }
      }
    })];
  }
});

export {
  Placeholder
};
//# sourceMappingURL=chunk-OZQMG2V2.js.map
