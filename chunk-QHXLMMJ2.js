import {
  TUI_DEFAULT_HTML5_MEDIA_ATTRIBUTES
} from "./chunk-6CNQZSVV.js";
import {
  tuiGetNestedNodes,
  tuiParseNodeAttributes
} from "./chunk-3XOPYWL2.js";
import {
  Node2 as Node,
  mergeAttributes
} from "./chunk-U65UEYRO.js";

// projects/editor/extensions/media/index.ts
var TuiAudio = Node.create({
  name: "audio",
  group: "block",
  content: "source+",
  addAttributes() {
    return tuiParseNodeAttributes(TUI_DEFAULT_HTML5_MEDIA_ATTRIBUTES);
  },
  parseHTML() {
    return [{ tag: "audio" }];
  },
  renderHTML({ node, HTMLAttributes }) {
    return ["audio", HTMLAttributes, ...tuiGetNestedNodes(node)];
  }
});
var TuiSource = Node.create({
  name: "source",
  addAttributes() {
    return tuiParseNodeAttributes([
      "src",
      "type",
      "width",
      "height",
      "media",
      "sizes",
      "srcset"
    ]);
  },
  parseHTML() {
    return [{ tag: "source" }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["source", mergeAttributes(HTMLAttributes)];
  }
});
var TuiVideo = Node.create({
  name: "video",
  group: "block",
  content: "source+",
  addAttributes() {
    return tuiParseNodeAttributes(TUI_DEFAULT_HTML5_MEDIA_ATTRIBUTES);
  },
  parseHTML() {
    return [{ tag: "video" }];
  },
  renderHTML({ node, HTMLAttributes }) {
    return ["video", HTMLAttributes, ...tuiGetNestedNodes(node)];
  }
});

export {
  TuiAudio,
  TuiSource,
  TuiVideo
};
//# sourceMappingURL=chunk-QHXLMMJ2.js.map
