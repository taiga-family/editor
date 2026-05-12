import {
  Extension
} from "./chunk-77B4UB4S.js";

// projects/editor/extensions/file-link/index.ts
function linkAttributesToString(attrs) {
  return Object.entries(attrs).map(([key, value]) => `${key}="${value}"`).join(" ");
}
var TuiFileLink = Extension.create({
  name: "fileLink",
  addCommands() {
    return {
      setFileLink: (fileLink) => ({ state, chain }) => {
        const { selection } = state;
        const selectedSize = Math.abs(selection.to - selection.from);
        const attrs = fileLink.attrs ? linkAttributesToString(fileLink.attrs) : "";
        return (selectedSize > 0 ? chain().toggleMark("link", { href: fileLink.link }, { extendEmptyMarkRange: true }).setTextSelection(selection.to) : chain().insertContent(`<a href="${fileLink.link}" ${attrs}>${fileLink.name}</a>`)).setTextSelection(selection.to).run();
      }
    };
  }
});

export {
  TuiFileLink
};
//# sourceMappingURL=chunk-G7N6NM5P.js.map
