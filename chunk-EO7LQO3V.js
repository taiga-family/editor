import {
  TUI_DEFAULT_HTML5_MEDIA_ATTRIBUTES
} from "./chunk-TU7TDGZA.js";
import {
  tuiGetNestedNodes,
  tuiParseNodeAttributes
} from "./chunk-3PCP22CS.js";
import {
  Node3,
  mergeAttributes
} from "./chunk-Q52BLV3K.js";

// projects/editor/extensions/media/index.ts
var TuiAudio = Node3.create({
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
var TuiSource = Node3.create({
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
var TuiVideo = Node3.create({
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
//# sourceMappingURL=chunk-EO7LQO3V.js.map
