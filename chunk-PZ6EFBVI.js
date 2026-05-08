import {
  TUI_DEFAULT_HTML5_MEDIA_ATTRIBUTES
} from "./chunk-UXUYEKAA.js";
import {
  tuiGetNestedNodes,
  tuiParseNodeAttributes
} from "./chunk-RVX5RPAP.js";
import {
  Node2 as Node,
  mergeAttributes
} from "./chunk-OPLENYEC.js";

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
//# sourceMappingURL=chunk-PZ6EFBVI.js.map
