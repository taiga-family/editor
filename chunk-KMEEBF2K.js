import {
  GapCursor
} from "./chunk-MAMGYOWB.js";
import {
  TUI_EDITOR_RESIZE_EVENT
} from "./chunk-XDT5UXUV.js";
import {
  tuiDeleteNode
} from "./chunk-HNVQLPMS.js";
import {
  Node3,
  Plugin,
  PluginKey,
  Selection,
  TextSelection,
  createBlockMarkdownSpec,
  defaultBlockAt,
  findChildren,
  findParentNode,
  isActive,
  mergeAttributes
} from "./chunk-QAKA6OWS.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// node_modules/@tiptap/extension-details/dist/index.js
var isNodeVisible = (position, editor) => {
  const node = editor.view.domAtPos(position).node;
  const isOpen = node.offsetParent !== null;
  return isOpen;
};
var findClosestVisibleNode = ($pos, predicate, editor) => {
  for (let i = $pos.depth; i > 0; i -= 1) {
    const node = $pos.node(i);
    const match = predicate(node);
    const isVisible = isNodeVisible($pos.start(i), editor);
    if (match && isVisible) {
      return {
        pos: i > 0 ? $pos.before(i) : 0,
        start: $pos.start(i),
        depth: i,
        node
      };
    }
  }
};
var setGapCursor = (editor, direction) => {
  const {
    state,
    view,
    extensionManager
  } = editor;
  const {
    schema,
    selection
  } = state;
  const {
    empty,
    $anchor
  } = selection;
  const hasGapCursorExtension = !!extensionManager.extensions.find((extension) => extension.name === "gapCursor");
  if (!empty || $anchor.parent.type !== schema.nodes.detailsSummary || !hasGapCursorExtension) {
    return false;
  }
  if (direction === "right" && $anchor.parentOffset !== $anchor.parent.nodeSize - 2) {
    return false;
  }
  const details = findParentNode((node) => node.type === schema.nodes.details)(selection);
  if (!details) {
    return false;
  }
  const detailsContent = findChildren(details.node, (node) => node.type === schema.nodes.detailsContent);
  if (!detailsContent.length) {
    return false;
  }
  const isOpen = isNodeVisible(details.start + detailsContent[0].pos + 1, editor);
  if (isOpen) {
    return false;
  }
  const $position = state.doc.resolve(details.pos + details.node.nodeSize);
  const $validPosition = GapCursor.findFrom($position, 1, false);
  if (!$validPosition) {
    return false;
  }
  const {
    tr
  } = state;
  const gapCursorSelection = new GapCursor($validPosition);
  tr.setSelection(gapCursorSelection);
  tr.scrollIntoView();
  view.dispatch(tr);
  return true;
};
var Details = Node3.create(__spreadProps(__spreadValues({
  name: "details",
  content: "detailsSummary detailsContent",
  group: "block",
  defining: true,
  isolating: true,
  // @ts-ignore reason: `allowGapCursor` is not a valid property by default, but the `GapCursor` extension adds it to the Nodeconfig type
  allowGapCursor: false,
  addOptions() {
    return {
      persist: false,
      openClassName: "is-open",
      HTMLAttributes: {},
      renderToggleButton: ({
        element,
        isOpen
      }) => {
        element.setAttribute("aria-label", isOpen ? "Collapse details content" : "Expand details content");
      }
    };
  },
  addAttributes() {
    if (!this.options.persist) {
      return [];
    }
    return {
      open: {
        default: false,
        parseHTML: (element) => element.hasAttribute("open"),
        renderHTML: ({
          open
        }) => {
          if (!open) {
            return {};
          }
          return {
            open: ""
          };
        }
      }
    };
  },
  parseHTML() {
    return [{
      tag: "details"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["details", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  }
}, createBlockMarkdownSpec({
  nodeName: "details",
  content: "block"
})), {
  addNodeView() {
    return ({
      editor,
      getPos,
      node,
      HTMLAttributes
    }) => {
      const dom = document.createElement("div");
      const attributes = mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        "data-type": this.name
      });
      Object.entries(attributes).forEach(([key, value]) => dom.setAttribute(key, value));
      const toggle = document.createElement("button");
      toggle.type = "button";
      const renderToggleButton = (options) => {
        this.options.renderToggleButton(__spreadValues({
          element: toggle
        }, options));
      };
      dom.append(toggle);
      const content = document.createElement("div");
      dom.append(content);
      const toggleDetailsContent = (options) => {
        const {
          setToValue,
          node: currentNode = node
        } = options || {};
        if (setToValue !== void 0) {
          if (setToValue) {
            if (dom.classList.contains(this.options.openClassName)) {
              return;
            }
            dom.classList.add(this.options.openClassName);
          } else {
            if (!dom.classList.contains(this.options.openClassName)) {
              return;
            }
            dom.classList.remove(this.options.openClassName);
          }
        } else {
          dom.classList.toggle(this.options.openClassName);
        }
        const isOpen = dom.classList.contains(this.options.openClassName);
        renderToggleButton({
          isOpen,
          node: currentNode
        });
        const event = new Event("toggleDetailsContent");
        const detailsContent = content.querySelector(':scope > div[data-type="detailsContent"]');
        detailsContent == null ? void 0 : detailsContent.dispatchEvent(event);
      };
      renderToggleButton({
        isOpen: Boolean(node.attrs.open),
        node
      });
      if (node.attrs.open) {
        setTimeout(() => toggleDetailsContent());
      }
      toggle.addEventListener("click", () => {
        toggleDetailsContent();
        if (!this.options.persist) {
          editor.commands.focus(void 0, {
            scrollIntoView: false
          });
          return;
        }
        if (editor.isEditable && typeof getPos === "function") {
          const {
            from,
            to
          } = editor.state.selection;
          editor.chain().command(({
            tr
          }) => {
            const pos = getPos();
            if (typeof pos !== "number") {
              return false;
            }
            const currentNode = tr.doc.nodeAt(pos);
            if ((currentNode == null ? void 0 : currentNode.type) !== this.type) {
              return false;
            }
            tr.setNodeMarkup(pos, void 0, {
              open: !currentNode.attrs.open
            });
            return true;
          }).setTextSelection({
            from,
            to
          }).focus(void 0, {
            scrollIntoView: false
          }).run();
        }
      });
      return {
        dom,
        contentDOM: content,
        ignoreMutation(mutation) {
          if (mutation.type === "selection") {
            return false;
          }
          const target = mutation.target;
          const isInsideWrapper = dom.contains(target);
          const isInsideToggleButton = toggle.contains(target);
          return isInsideToggleButton || !isInsideWrapper || dom === target;
        },
        update: (updatedNode) => {
          if (updatedNode.type !== this.type) {
            return false;
          }
          if (updatedNode.attrs.open !== void 0) {
            toggleDetailsContent({
              setToValue: updatedNode.attrs.open,
              node: updatedNode
            });
          } else {
            renderToggleButton({
              isOpen: dom.classList.contains(this.options.openClassName),
              node: updatedNode
            });
          }
          return true;
        }
      };
    };
  },
  addCommands() {
    return {
      setDetails: () => ({
        state,
        chain
      }) => {
        var _a;
        const {
          schema,
          selection
        } = state;
        const {
          $from,
          $to
        } = selection;
        const range = $from.blockRange($to);
        if (!range) {
          return false;
        }
        const slice = state.doc.slice(range.start, range.end);
        const match = schema.nodes.detailsContent.contentMatch.matchFragment(slice.content);
        if (!match) {
          return false;
        }
        const content = ((_a = slice.toJSON()) == null ? void 0 : _a.content) || [];
        return chain().insertContentAt({
          from: range.start,
          to: range.end
        }, {
          type: this.name,
          content: [{
            type: "detailsSummary"
          }, {
            type: "detailsContent",
            content
          }]
        }).setTextSelection(range.start + 2).run();
      },
      unsetDetails: () => ({
        state,
        chain
      }) => {
        const {
          selection,
          schema
        } = state;
        const details = findParentNode((node) => node.type === this.type)(selection);
        if (!details) {
          return false;
        }
        const detailsSummaries = findChildren(details.node, (node) => node.type === schema.nodes.detailsSummary);
        const detailsContents = findChildren(details.node, (node) => node.type === schema.nodes.detailsContent);
        if (!detailsSummaries.length || !detailsContents.length) {
          return false;
        }
        const detailsSummary = detailsSummaries[0];
        const detailsContent = detailsContents[0];
        const from = details.pos;
        const $from = state.doc.resolve(from);
        const to = from + details.node.nodeSize;
        const range = {
          from,
          to
        };
        const content = detailsContent.node.content.toJSON() || [];
        const defaultTypeForSummary = $from.parent.type.contentMatch.defaultType;
        const summaryContent = defaultTypeForSummary == null ? void 0 : defaultTypeForSummary.create(null, detailsSummary.node.content).toJSON();
        const mergedContent = [summaryContent, ...content];
        return chain().insertContentAt(range, mergedContent).setTextSelection(from + 1).run();
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Backspace: () => {
        const {
          schema,
          selection
        } = this.editor.state;
        const {
          empty,
          $anchor
        } = selection;
        if (!empty || $anchor.parent.type !== schema.nodes.detailsSummary) {
          return false;
        }
        if ($anchor.parentOffset !== 0) {
          return this.editor.commands.command(({
            tr
          }) => {
            const from = $anchor.pos - 1;
            const to = $anchor.pos;
            tr.delete(from, to);
            return true;
          });
        }
        return this.editor.commands.unsetDetails();
      },
      // Creates a new node below it if it is closed.
      // Otherwise inside `DetailsContent`.
      Enter: ({
        editor
      }) => {
        const {
          state,
          view
        } = editor;
        const {
          schema,
          selection
        } = state;
        const {
          $head
        } = selection;
        if ($head.parent.type !== schema.nodes.detailsSummary) {
          return false;
        }
        const isVisible = isNodeVisible($head.after() + 1, editor);
        const above = isVisible ? state.doc.nodeAt($head.after()) : $head.node(-2);
        if (!above) {
          return false;
        }
        const after = isVisible ? 0 : $head.indexAfter(-1);
        const type = defaultBlockAt(above.contentMatchAt(after));
        if (!type || !above.canReplaceWith(after, after, type)) {
          return false;
        }
        const node = type.createAndFill();
        if (!node) {
          return false;
        }
        const pos = isVisible ? $head.after() + 1 : $head.after(-1);
        const tr = state.tr.replaceWith(pos, pos, node);
        const $pos = tr.doc.resolve(pos);
        const newSelection = Selection.near($pos, 1);
        tr.setSelection(newSelection);
        tr.scrollIntoView();
        view.dispatch(tr);
        return true;
      },
      // The default gapcursor implementation can’t handle hidden content, so we need to fix this.
      ArrowRight: ({
        editor
      }) => {
        return setGapCursor(editor, "right");
      },
      // The default gapcursor implementation can’t handle hidden content, so we need to fix this.
      ArrowDown: ({
        editor
      }) => {
        return setGapCursor(editor, "down");
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      // This plugin prevents text selections within the hidden content in `DetailsContent`.
      // The cursor is moved to the next visible position.
      new Plugin({
        key: new PluginKey("detailsSelection"),
        appendTransaction: (transactions, oldState, newState) => {
          const {
            editor,
            type
          } = this;
          const isComposing = editor.view.composing;
          if (isComposing) {
            return;
          }
          const selectionSet = transactions.some((transaction2) => transaction2.selectionSet);
          if (!selectionSet || !oldState.selection.empty || !newState.selection.empty) {
            return;
          }
          const detailsIsActive = isActive(newState, type.name);
          if (!detailsIsActive) {
            return;
          }
          const {
            $from
          } = newState.selection;
          const isVisible = isNodeVisible($from.pos, editor);
          if (isVisible) {
            return;
          }
          const details = findClosestVisibleNode($from, (node) => node.type === type, editor);
          if (!details) {
            return;
          }
          const detailsSummaries = findChildren(details.node, (node) => node.type === newState.schema.nodes.detailsSummary);
          if (!detailsSummaries.length) {
            return;
          }
          const detailsSummary = detailsSummaries[0];
          const selectionDirection = oldState.selection.from < newState.selection.from ? "forward" : "backward";
          const correctedPosition = selectionDirection === "forward" ? details.start + detailsSummary.pos : details.pos + detailsSummary.pos + detailsSummary.node.nodeSize;
          const selection = TextSelection.create(newState.doc, correctedPosition);
          const transaction = newState.tr.setSelection(selection);
          return transaction;
        }
      })
    ];
  }
}));
var DetailsContent = Node3.create(__spreadValues({
  name: "detailsContent",
  content: "block+",
  defining: true,
  selectable: false,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [{
      tag: `div[data-type="${this.name}"]`
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["div", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
      "data-type": this.name
    }), 0];
  },
  addNodeView() {
    return ({
      HTMLAttributes
    }) => {
      const dom = document.createElement("div");
      const attributes = mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        "data-type": this.name,
        hidden: "hidden"
      });
      Object.entries(attributes).forEach(([key, value]) => dom.setAttribute(key, value));
      dom.addEventListener("toggleDetailsContent", () => {
        dom.toggleAttribute("hidden");
      });
      return {
        dom,
        contentDOM: dom,
        ignoreMutation(mutation) {
          if (mutation.type === "selection") {
            return false;
          }
          return !dom.contains(mutation.target) || dom === mutation.target;
        },
        update: (updatedNode) => {
          if (updatedNode.type !== this.type) {
            return false;
          }
          return true;
        }
      };
    };
  },
  addKeyboardShortcuts() {
    return {
      // Escape node on double enter
      Enter: ({
        editor
      }) => {
        const {
          state,
          view
        } = editor;
        const {
          selection
        } = state;
        const {
          $from,
          empty
        } = selection;
        const detailsContent = findParentNode((node2) => node2.type === this.type)(selection);
        if (!empty || !detailsContent || !detailsContent.node.childCount) {
          return false;
        }
        const fromIndex = $from.index(detailsContent.depth);
        const {
          childCount
        } = detailsContent.node;
        const isAtEnd = childCount === fromIndex + 1;
        if (!isAtEnd) {
          return false;
        }
        const defaultChildType = detailsContent.node.type.contentMatch.defaultType;
        const defaultChildNode = defaultChildType == null ? void 0 : defaultChildType.createAndFill();
        if (!defaultChildNode) {
          return false;
        }
        const $childPos = state.doc.resolve(detailsContent.pos + 1);
        const lastChildIndex = childCount - 1;
        const lastChildNode = detailsContent.node.child(lastChildIndex);
        const lastChildPos = $childPos.posAtIndex(lastChildIndex, detailsContent.depth);
        const lastChildNodeIsEmpty = lastChildNode.eq(defaultChildNode);
        if (!lastChildNodeIsEmpty) {
          return false;
        }
        const above = $from.node(-3);
        if (!above) {
          return false;
        }
        const after = $from.indexAfter(-3);
        const type = defaultBlockAt(above.contentMatchAt(after));
        if (!type || !above.canReplaceWith(after, after, type)) {
          return false;
        }
        const node = type.createAndFill();
        if (!node) {
          return false;
        }
        const {
          tr
        } = state;
        const pos = $from.after(-2);
        tr.replaceWith(pos, pos, node);
        const $pos = tr.doc.resolve(pos);
        const newSelection = Selection.near($pos, 1);
        tr.setSelection(newSelection);
        const deleteFrom = lastChildPos;
        const deleteTo = lastChildPos + lastChildNode.nodeSize;
        tr.delete(deleteFrom, deleteTo);
        tr.scrollIntoView();
        view.dispatch(tr);
        return true;
      }
    };
  }
}, createBlockMarkdownSpec({
  nodeName: "detailsContent"
})));
var DetailsSummary = Node3.create(__spreadValues({
  name: "detailsSummary",
  content: "text*",
  defining: true,
  selectable: false,
  isolating: true,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [{
      tag: "summary"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["summary", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  }
}, createBlockMarkdownSpec({
  nodeName: "detailsSummary",
  content: "inline"
})));

// projects/editor/extensions/details/index.ts
var TuiDetails = Details.extend({
  addOptions() {
    return __spreadProps(__spreadValues({}, this.parent?.()), {
      persist: false,
      openClassName: "is-open",
      HTMLAttributes: {},
      renderToggleButton: ({ element, isOpen }) => {
        element.setAttribute("aria-label", isOpen ? "Collapse details content" : "Expand details content");
      },
      inheritOpen: false
    });
  },
  addAttributes() {
    return {
      open: {
        default: "open",
        keepOnSplit: false,
        parseHTML: (element) => element.getAttribute("open") === "open" || element.getAttribute("open") === "true" || element.hasAttribute("open") || element.getAttribute("data-opened"),
        // legacy
        renderHTML: (attributes) => ({
          open: attributes.open && this.options.inheritOpen ? "open" : void 0
        })
      }
    };
  },
  renderHTML({ HTMLAttributes }) {
    return [
      "details",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0
    ];
  },
  addNodeView() {
    return globalThis.document ? ({ node, getPos, editor }) => {
      const wrapper = document.createElement("div");
      const details = document.createElement("details");
      const collapseButton = document.createElement("button");
      const deleteButton = document.createElement("button");
      wrapper.className = "t-details-wrapper";
      collapseButton.className = "t-details-arrow";
      collapseButton.type = "button";
      deleteButton.className = "t-details-delete";
      deleteButton.type = "button";
      details.open = node.attrs.open;
      const openHandler = (event) => {
        const pos = getPos();
        if (pos === void 0) {
          return;
        }
        details.open = !details.open;
        node.attrs.open = details.open;
        event.target?.dispatchEvent(new CustomEvent(TUI_EDITOR_RESIZE_EVENT, { bubbles: true }));
        editor.chain().focus().setTextSelection(pos).run();
      };
      collapseButton.addEventListener("click", openHandler);
      deleteButton.addEventListener("click", (event) => {
        collapseButton.removeEventListener("click", openHandler);
        event.preventDefault();
        editor.commands.unsetDetailsAt(getPos());
      }, { capture: true, once: true });
      wrapper.append(details, collapseButton, deleteButton);
      return {
        dom: wrapper,
        contentDOM: details
      };
    } : null;
  },
  addCommands() {
    return __spreadProps(__spreadValues({}, this.parent?.()), {
      setDetails: () => ({ commands, editor, state }) => {
        if (editor.isActive("detailsSummary")) {
          return false;
        }
        const { schema, selection } = state;
        const { $from, $to } = selection;
        const range = $from.blockRange($to);
        if (!range) {
          return false;
        }
        const slice = state.doc.slice(range.start, range.end);
        const match = schema.nodes.detailsContent?.contentMatch.matchFragment(slice.content);
        if (!match) {
          return false;
        }
        commands.insertContentAt({ from: range.start, to: range.end }, {
          type: this.name,
          content: [
            {
              type: "detailsSummary",
              content: [
                {
                  type: "paragraph",
                  content: []
                }
              ]
            },
            {
              type: "detailsContent",
              content: slice.toJSON()?.content ?? []
            }
          ]
        });
        commands.focus();
        commands.setTextSelection(range.start + 2);
        return true;
      },
      unsetDetailsAt: (pos) => ({ state, dispatch }) => {
        if (pos === void 0) {
          return tuiDeleteNode(state, dispatch, this.name);
        }
        const currentNode = state.doc.nodeAt(pos);
        if (currentNode?.type.name !== this.name) {
          return false;
        }
        if (dispatch) {
          dispatch(state.tr.delete(pos, pos + currentNode.nodeSize).scrollIntoView());
        }
        return true;
      }
    });
  }
});
var TuiDetailsSummary = DetailsSummary.extend({
  content: "block+",
  group: "block"
});
var TuiDetailsContent = DetailsContent.extend({
  addNodeView: null,
  parseHTML() {
    return [{ tag: 'div[data-type="details-content"]' }];
  },
  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        "data-type": "details-content"
      }),
      0
    ];
  }
});

export {
  TuiDetails,
  TuiDetailsSummary,
  TuiDetailsContent
};
//# sourceMappingURL=chunk-KMEEBF2K.js.map
