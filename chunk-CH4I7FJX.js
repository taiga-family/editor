import {
  EditorState,
  Extension,
  Node,
  Plugin,
  PluginKey,
  getSchema
} from "./chunk-3Z6DR5PV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// node_modules/@tiptap/extension-table-of-contents/node_modules/uuid/dist/stringify.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

// node_modules/@tiptap/extension-table-of-contents/node_modules/uuid/dist/rng.js
var rnds8 = new Uint8Array(16);
function rng() {
  return crypto.getRandomValues(rnds8);
}

// node_modules/@tiptap/extension-table-of-contents/node_modules/uuid/dist/v4.js
function v4(options, buf, offset) {
  if (!buf && !options && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return _v4(options, buf, offset);
}
function _v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random ?? options.rng?.() ?? rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    if (offset < 0 || offset + 16 > buf.length) {
      throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
    }
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default = v4;

// node_modules/@tiptap/extension-table-of-contents/dist/index.js
var TableOfContentsPlugin = ({
  getId,
  anchorTypes = ["heading"]
}) => {
  return new Plugin({
    key: new PluginKey("tableOfContent"),
    appendTransaction(transactions, _oldState, newState) {
      if (typeof window === "undefined") return null;
      if (transactions.some((tr2) => tr2.getMeta("composition"))) return;
      const tr = newState.tr;
      let modified = false;
      if (transactions.some((transaction) => transaction.docChanged)) {
        const existingIds = [];
        newState.doc.descendants((node, pos) => {
          const nodeId = node.attrs["data-toc-id"];
          if (!anchorTypes.includes(node.type.name) || node.textContent.length === 0) return;
          if (nodeId === null || nodeId === void 0 || existingIds.includes(nodeId)) {
            let id = "";
            if (getId) id = getId(node.textContent);
            else id = v4_default();
            tr.setNodeMarkup(pos, void 0, __spreadProps(__spreadValues({}, node.attrs), {
              "data-toc-id": id,
              id
            }));
            modified = true;
          }
          existingIds.push(nodeId);
        });
      }
      return modified ? tr : null;
    }
  });
};
var getLastHeadingOnLevel = (headings, level) => {
  let heading = headings.filter((currentHeading) => currentHeading.level === level).pop();
  if (level === 0) return;
  if (!heading) heading = getLastHeadingOnLevel(headings, level - 1);
  return heading;
};
var getHeadlineLevel = (headline, previousItems) => {
  let level = 1;
  const previousHeadline = previousItems.at(-1);
  const highestHeadlineAbove = [...previousItems].reverse().find((h) => h.originalLevel <= headline.node.attrs.level);
  const highestLevelAbove = (highestHeadlineAbove === null || highestHeadlineAbove === void 0 ? void 0 : highestHeadlineAbove.level) || 1;
  if (headline.node.attrs.level > ((previousHeadline === null || previousHeadline === void 0 ? void 0 : previousHeadline.originalLevel) || 1)) level = ((previousHeadline === null || previousHeadline === void 0 ? void 0 : previousHeadline.level) || 1) + 1;
  else if (headline.node.attrs.level < ((previousHeadline === null || previousHeadline === void 0 ? void 0 : previousHeadline.originalLevel) || 1)) level = highestLevelAbove;
  else level = (previousHeadline === null || previousHeadline === void 0 ? void 0 : previousHeadline.level) || 1;
  return level;
};
var getLinearIndexes = (_headline, previousHeadlines) => {
  const previousHeadline = previousHeadlines.at(-1);
  if (!previousHeadline) return 1;
  return ((previousHeadline === null || previousHeadline === void 0 ? void 0 : previousHeadline.itemIndex) || 1) + 1;
};
var getHierarchicalIndexes = (headline, previousHeadlines, currentLevel) => {
  var _previousHeadlinesOnL;
  const level = currentLevel || headline.node.attrs.level || 1;
  let itemIndex = 1;
  const previousHeadlinesOnLevelOrBelow = previousHeadlines.filter((h) => h.level <= level);
  if (((_previousHeadlinesOnL = previousHeadlinesOnLevelOrBelow.at(-1)) === null || _previousHeadlinesOnL === void 0 ? void 0 : _previousHeadlinesOnL.level) === level) {
    var _previousHeadlinesOnL2;
    itemIndex = (((_previousHeadlinesOnL2 = previousHeadlinesOnLevelOrBelow.at(-1)) === null || _previousHeadlinesOnL2 === void 0 ? void 0 : _previousHeadlinesOnL2.itemIndex) || 1) + 1;
  } else itemIndex = 1;
  return itemIndex;
};
function debounce(func, wait) {
  let timeout = null;
  return (...args) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}
var addTocActiveStatesAndGetItems = (content, options) => {
  const {
    editor
  } = options;
  const headlines = [];
  const scrolledOverIds = [];
  let activeId = null;
  if (editor.isDestroyed) return content;
  editor.state.doc.descendants((node, pos) => {
    var _options$anchorTypes;
    if (!((_options$anchorTypes = options.anchorTypes) === null || _options$anchorTypes === void 0 ? void 0 : _options$anchorTypes.includes(node.type.name))) return;
    headlines.push({
      node,
      pos
    });
  });
  headlines.forEach((headline) => {
    const domElement = editor.view.domAtPos(headline.pos + 1).node;
    if (options.storage.scrollPosition >= domElement.offsetTop) {
      activeId = headline.node.attrs["data-toc-id"];
      scrolledOverIds.push(headline.node.attrs["data-toc-id"]);
    }
  });
  content = content.map((heading) => __spreadProps(__spreadValues({}, heading), {
    isActive: heading.id === activeId,
    isScrolledOver: scrolledOverIds.includes(heading.id)
  }));
  if (options.onUpdate) {
    const isInitialCreation = options.storage.content.length === 0;
    options.onUpdate(content, isInitialCreation);
  }
  return content;
};
var setTocData = (options) => {
  const {
    editor
  } = options;
  if (editor.isDestroyed) return;
  const headlines = [];
  let anchors = [];
  const anchorEls = [];
  editor.state.doc.descendants((node, pos) => {
    var _options$anchorTypes2;
    if (!((_options$anchorTypes2 = options.anchorTypes) === null || _options$anchorTypes2 === void 0 ? void 0 : _options$anchorTypes2.includes(node.type.name))) return;
    headlines.push({
      node,
      pos
    });
  });
  headlines.forEach((headline, i) => {
    if (headline.node.textContent.length === 0) return;
    const domElement = editor.view.domAtPos(headline.pos + 1).node;
    const scrolledOver = options.storage.scrollPosition >= domElement.offsetTop;
    anchorEls.push(domElement);
    const originalLevel = headline.node.attrs.level;
    const prevHeadline = headlines[i - 1];
    const level = options.getLevelFn(headline, anchors);
    const itemIndex = options.getIndexFn(headline, anchors, level);
    if (!prevHeadline) {
      anchors = [...anchors, {
        itemIndex,
        id: headline.node.attrs["data-toc-id"],
        originalLevel,
        level,
        textContent: headline.node.textContent,
        pos: headline.pos,
        editor,
        isActive: false,
        isScrolledOver: scrolledOver,
        node: headline.node,
        dom: domElement
      }];
      return;
    }
    anchors = [...anchors, {
      itemIndex,
      id: headline.node.attrs["data-toc-id"],
      originalLevel,
      level,
      textContent: headline.node.textContent,
      pos: headline.pos,
      editor,
      isActive: false,
      isScrolledOver: false,
      node: headline.node,
      dom: domElement
    }];
  });
  anchors = addTocActiveStatesAndGetItems(anchors, options);
  options.storage.anchors = anchorEls;
  options.storage.content = anchors;
  editor.state.tr.setMeta("toc", anchors);
  editor.view.dispatch(editor.state.tr);
};
var TableOfContents = Extension.create({
  name: "tableOfContents",
  addStorage() {
    return {
      content: [],
      anchors: [],
      scrollHandler: () => null,
      scrollPosition: 0
    };
  },
  addGlobalAttributes() {
    return [{
      types: this.options.anchorTypes || ["headline"],
      attributes: {
        id: {
          default: null,
          renderHTML: (attributes) => {
            return {
              id: attributes.id
            };
          },
          parseHTML: (element) => {
            return element.id || null;
          }
        },
        "data-toc-id": {
          default: null,
          renderHTML: (attributes) => {
            return {
              "data-toc-id": attributes["data-toc-id"]
            };
          },
          parseHTML: (element) => {
            return element.dataset.tocId || null;
          }
        }
      }
    }];
  },
  addOptions() {
    return {
      onUpdate: () => {
      },
      getId: (_textContent) => v4_default(),
      scrollParent: typeof window !== "undefined" ? () => window : void 0,
      anchorTypes: ["heading"]
    };
  },
  addCommands() {
    return {
      updateTableOfContents: () => ({
        dispatch
      }) => {
        if (dispatch) {
          var _this$options$onUpdat;
          setTocData({
            editor: this.editor,
            storage: this.storage,
            onUpdate: (_this$options$onUpdat = this.options.onUpdate) === null || _this$options$onUpdat === void 0 ? void 0 : _this$options$onUpdat.bind(this),
            getIndexFn: this.options.getIndex || getLinearIndexes,
            getLevelFn: this.options.getLevel || getHeadlineLevel,
            anchorTypes: this.options.anchorTypes
          });
        }
        return true;
      }
    };
  },
  onTransaction({
    transaction
  }) {
    if (transaction.docChanged && !transaction.getMeta("toc")) {
      var _this$options$onUpdat2;
      setTocData({
        editor: this.editor,
        storage: this.storage,
        onUpdate: (_this$options$onUpdat2 = this.options.onUpdate) === null || _this$options$onUpdat2 === void 0 ? void 0 : _this$options$onUpdat2.bind(this),
        getIndexFn: this.options.getIndex || getLinearIndexes,
        getLevelFn: this.options.getLevel || getHeadlineLevel,
        anchorTypes: this.options.anchorTypes
      });
    }
  },
  onCreate() {
    var _this$options$onUpdat3;
    if (typeof window === "undefined" || !this.editor.view) return;
    const {
      tr
    } = this.editor.state;
    const existingIds = [];
    if (this.options.scrollParent && typeof this.options.scrollParent !== "function") console.warn("[Tiptap Table of Contents Deprecation Notice]: The 'scrollParent' option must now be provided as a callback function that returns the 'scrollParent' element. The ability to pass this option directly will be deprecated in future releases.");
    this.editor.state.doc.descendants((node, pos) => {
      var _this$options$anchorT;
      const nodeId = node.attrs["data-toc-id"];
      if (!((_this$options$anchorT = this.options.anchorTypes) === null || _this$options$anchorT === void 0 ? void 0 : _this$options$anchorT.includes(node.type.name)) || node.textContent.length === 0) return;
      if (nodeId === null || nodeId === void 0 || existingIds.includes(nodeId)) {
        let id = "";
        if (this.options.getId) id = this.options.getId(node.textContent);
        else id = v4_default();
        tr.setNodeMarkup(pos, void 0, __spreadProps(__spreadValues({}, node.attrs), {
          "data-toc-id": id,
          id
        }));
      }
      existingIds.push(nodeId);
    });
    this.editor.view.dispatch(tr);
    setTocData({
      editor: this.editor,
      storage: this.storage,
      onUpdate: (_this$options$onUpdat3 = this.options.onUpdate) === null || _this$options$onUpdat3 === void 0 ? void 0 : _this$options$onUpdat3.bind(this),
      getIndexFn: this.options.getIndex || getLinearIndexes,
      getLevelFn: this.options.getLevel || getHeadlineLevel,
      anchorTypes: this.options.anchorTypes
    });
    this.storage.scrollHandler = () => {
      var _this$options$onUpdat4;
      if (!this.options.scrollParent) return;
      const scrollParent2 = typeof this.options.scrollParent === "function" ? this.options.scrollParent() : this.options.scrollParent;
      const scrollPosition = scrollParent2 instanceof HTMLElement ? scrollParent2.scrollTop : scrollParent2.scrollY;
      this.storage.scrollPosition = scrollPosition || 0;
      const updatedItems = addTocActiveStatesAndGetItems(this.storage.content, {
        editor: this.editor,
        anchorTypes: this.options.anchorTypes,
        storage: this.storage,
        onUpdate: (_this$options$onUpdat4 = this.options.onUpdate) === null || _this$options$onUpdat4 === void 0 ? void 0 : _this$options$onUpdat4.bind(this)
      });
      this.storage.content = updatedItems;
    };
    if (!this.options.scrollParent) return;
    const scrollParent = typeof this.options.scrollParent === "function" ? this.options.scrollParent() : this.options.scrollParent;
    if (scrollParent) scrollParent.addEventListener("scroll", this.storage.scrollHandler);
  },
  onDestroy() {
    if (!this.options.scrollParent) return;
    const scrollParent = typeof this.options.scrollParent === "function" ? this.options.scrollParent() : this.options.scrollParent;
    if (scrollParent) scrollParent.removeEventListener("scroll", this.storage.scrollHandler);
  },
  addProseMirrorPlugins() {
    return [TableOfContentsPlugin({
      getId: this.options.getId,
      anchorTypes: this.options.anchorTypes
    })];
  }
});
function generateTocIds(doc, extensions, extensionName = "tableOfContents") {
  var _tocExtension$options, _tocExtension$options2;
  const tocExtension = extensions.find((ext) => ext.name === extensionName);
  if (!tocExtension) throw new Error(`TableOfContents extension (name: "${extensionName}") not found in the extensions array`);
  const schema = getSchema([...extensions.filter((ext) => ext.name !== extensionName), tocExtension]);
  const anchorTypes = (_tocExtension$options = tocExtension.options.anchorTypes) !== null && _tocExtension$options !== void 0 ? _tocExtension$options : ["heading"];
  const getId = (_tocExtension$options2 = tocExtension.options.getId) !== null && _tocExtension$options2 !== void 0 ? _tocExtension$options2 : () => v4_default();
  const contentNode = Node.fromJSON(schema, doc);
  const updates = [];
  const existingIds = [];
  contentNode.descendants((node, pos) => {
    if (!anchorTypes.includes(node.type.name) || node.textContent.length === 0) return;
    const currentId = node.attrs["data-toc-id"];
    if (currentId == null || existingIds.includes(currentId)) {
      const id = getId(node.textContent);
      updates.push({
        pos,
        attrs: __spreadProps(__spreadValues({}, node.attrs), {
          id,
          "data-toc-id": id
        })
      });
    }
    existingIds.push(currentId);
  });
  const tr = EditorState.create({
    doc: contentNode
  }).tr;
  updates.forEach(({
    pos,
    attrs
  }) => {
    tr.setNodeMarkup(pos, void 0, attrs);
  });
  return tr.doc.toJSON();
}
var src_default = TableOfContents;
export {
  TableOfContents,
  TableOfContentsPlugin,
  debounce,
  src_default as default,
  generateTocIds,
  getHeadlineLevel,
  getHierarchicalIndexes,
  getLastHeadingOnLevel,
  getLinearIndexes
};
//# sourceMappingURL=chunk-CH4I7FJX.js.map
