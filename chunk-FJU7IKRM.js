import {
  TUI_DEFAULT_HTML5_MEDIA_ATTRIBUTES
} from "./chunk-C7Z7VG7M.js";
import {
  tuiGetNestedNodes,
  tuiParseNodeAttributes
} from "./chunk-L6H6ZKD6.js";
import {
  Node2 as Node,
  mergeAttributes
} from "./chunk-42BGUG2S.js";

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
//# sourceMappingURL=chunk-FJU7IKRM.js.map
