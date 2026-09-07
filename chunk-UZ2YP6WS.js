import {
  Extension,
  Mark2 as Mark,
  getStyleProperty,
  mergeAttributes
} from "./chunk-3Z6DR5PV.js";
import "./chunk-KWSTWQNB.js";

// node_modules/@tiptap/extension-text-style/dist/index.js
var MAX_FIND_CHILD_SPAN_DEPTH = 20;
var findChildSpans = (element, depth = 0) => {
  const childSpans = [];
  if (!element.children.length || depth > MAX_FIND_CHILD_SPAN_DEPTH) return childSpans;
  Array.from(element.children).forEach((child) => {
    if (child.tagName === "SPAN") childSpans.push(child);
    else if (child.children.length) childSpans.push(...findChildSpans(child, depth + 1));
  });
  return childSpans;
};
var mergeNestedSpanStyles = (element) => {
  if (!element.children.length) return;
  const childSpans = findChildSpans(element);
  if (!childSpans) return;
  childSpans.forEach((childSpan) => {
    var _childSpan$parentElem;
    const childStyle = childSpan.getAttribute("style");
    const closestParentSpanStyleOfChild = (_childSpan$parentElem = childSpan.parentElement) === null || _childSpan$parentElem === void 0 || (_childSpan$parentElem = _childSpan$parentElem.closest("span")) === null || _childSpan$parentElem === void 0 ? void 0 : _childSpan$parentElem.getAttribute("style");
    childSpan.setAttribute("style", `${closestParentSpanStyleOfChild};${childStyle}`);
  });
};
var TextStyle = Mark.create({
  name: "textStyle",
  priority: 101,
  addOptions() {
    return {
      HTMLAttributes: {},
      mergeNestedSpanStyles: true
    };
  },
  parseHTML() {
    return [{
      tag: "span",
      consuming: false,
      getAttrs: (element) => {
        if (!element.hasAttribute("style")) return false;
        if (this.options.mergeNestedSpanStyles) mergeNestedSpanStyles(element);
        return {};
      }
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["span", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      toggleTextStyle: (attributes) => ({
        commands
      }) => {
        return commands.toggleMark(this.name, attributes);
      },
      removeEmptyTextStyle: () => ({
        tr
      }) => {
        const {
          selection
        } = tr;
        tr.doc.nodesBetween(selection.from, selection.to, (node, pos) => {
          if (!node.isInline) return true;
          if (!node.marks.filter((mark) => mark.type === this.type).some((mark) => Object.values(mark.attrs).some((value) => !!value))) tr.removeMark(pos, pos + node.nodeSize, this.type);
        });
        return true;
      }
    };
  }
});
var BackgroundColor = Extension.create({
  name: "backgroundColor",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: {
        backgroundColor: {
          default: null,
          parseHTML: (element) => {
            var _getStyleProperty;
            const value = (_getStyleProperty = getStyleProperty(element, "background-color")) !== null && _getStyleProperty !== void 0 ? _getStyleProperty : element.style.backgroundColor;
            return value === null || value === void 0 ? void 0 : value.replace(/['"]+/g, "");
          },
          renderHTML: (attributes) => {
            if (!attributes.backgroundColor) return {};
            return {
              style: `background-color: ${attributes.backgroundColor}`
            };
          }
        }
      }
    }];
  },
  addCommands() {
    return {
      setBackgroundColor: (backgroundColor) => ({
        chain
      }) => {
        return chain().setMark("textStyle", {
          backgroundColor
        }).run();
      },
      unsetBackgroundColor: () => ({
        chain
      }) => {
        return chain().setMark("textStyle", {
          backgroundColor: null
        }).removeEmptyTextStyle().run();
      }
    };
  }
});
var Color = Extension.create({
  name: "color",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: {
        color: {
          default: null,
          parseHTML: (element) => {
            var _getStyleProperty;
            const value = (_getStyleProperty = getStyleProperty(element, "color")) !== null && _getStyleProperty !== void 0 ? _getStyleProperty : element.style.color;
            return value === null || value === void 0 ? void 0 : value.replace(/['"]+/g, "");
          },
          renderHTML: (attributes) => {
            if (!attributes.color) return {};
            return {
              style: `color: ${attributes.color}`
            };
          }
        }
      }
    }];
  },
  addCommands() {
    return {
      setColor: (color) => ({
        chain
      }) => {
        return chain().setMark("textStyle", {
          color
        }).run();
      },
      unsetColor: () => ({
        chain
      }) => {
        return chain().setMark("textStyle", {
          color: null
        }).removeEmptyTextStyle().run();
      }
    };
  }
});
var FontFamily = Extension.create({
  name: "fontFamily",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: {
        fontFamily: {
          default: null,
          parseHTML: (element) => {
            var _getStyleProperty;
            return (_getStyleProperty = getStyleProperty(element, "font-family")) !== null && _getStyleProperty !== void 0 ? _getStyleProperty : element.style.fontFamily;
          },
          renderHTML: (attributes) => {
            if (!attributes.fontFamily) return {};
            return {
              style: `font-family: ${attributes.fontFamily}`
            };
          }
        }
      }
    }];
  },
  addCommands() {
    return {
      setFontFamily: (fontFamily) => ({
        chain
      }) => {
        return chain().setMark("textStyle", {
          fontFamily
        }).run();
      },
      unsetFontFamily: () => ({
        chain
      }) => {
        return chain().setMark("textStyle", {
          fontFamily: null
        }).removeEmptyTextStyle().run();
      }
    };
  }
});
var FontSize = Extension.create({
  name: "fontSize",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: {
        fontSize: {
          default: null,
          parseHTML: (element) => {
            var _getStyleProperty;
            return (_getStyleProperty = getStyleProperty(element, "font-size")) !== null && _getStyleProperty !== void 0 ? _getStyleProperty : element.style.fontSize;
          },
          renderHTML: (attributes) => {
            if (!attributes.fontSize) return {};
            return {
              style: `font-size: ${attributes.fontSize}`
            };
          }
        }
      }
    }];
  },
  addCommands() {
    return {
      setFontSize: (fontSize) => ({
        chain
      }) => {
        return chain().setMark("textStyle", {
          fontSize
        }).run();
      },
      unsetFontSize: () => ({
        chain
      }) => {
        return chain().setMark("textStyle", {
          fontSize: null
        }).removeEmptyTextStyle().run();
      }
    };
  }
});
var LineHeight = Extension.create({
  name: "lineHeight",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: {
        lineHeight: {
          default: null,
          parseHTML: (element) => {
            var _getStyleProperty;
            return (_getStyleProperty = getStyleProperty(element, "line-height")) !== null && _getStyleProperty !== void 0 ? _getStyleProperty : element.style.lineHeight;
          },
          renderHTML: (attributes) => {
            if (!attributes.lineHeight) return {};
            return {
              style: `line-height: ${attributes.lineHeight}`
            };
          }
        }
      }
    }];
  },
  addCommands() {
    return {
      setLineHeight: (lineHeight) => ({
        chain
      }) => {
        return chain().setMark("textStyle", {
          lineHeight
        }).run();
      },
      unsetLineHeight: () => ({
        chain
      }) => {
        return chain().setMark("textStyle", {
          lineHeight: null
        }).removeEmptyTextStyle().run();
      }
    };
  }
});
var TextStyleKit = Extension.create({
  name: "textStyleKit",
  addExtensions() {
    const extensions = [];
    if (this.options.backgroundColor !== false) extensions.push(BackgroundColor.configure(this.options.backgroundColor));
    if (this.options.color !== false) extensions.push(Color.configure(this.options.color));
    if (this.options.fontFamily !== false) extensions.push(FontFamily.configure(this.options.fontFamily));
    if (this.options.fontSize !== false) extensions.push(FontSize.configure(this.options.fontSize));
    if (this.options.lineHeight !== false) extensions.push(LineHeight.configure(this.options.lineHeight));
    if (this.options.textStyle !== false) extensions.push(TextStyle.configure(this.options.textStyle));
    return extensions;
  }
});
export {
  BackgroundColor,
  Color,
  FontFamily,
  FontSize,
  LineHeight,
  TextStyle,
  TextStyleKit
};
//# sourceMappingURL=chunk-UZ2YP6WS.js.map
