import {
  tuiDeleteNode,
  tuiGetSelectedContent
} from "./chunk-HZQ27SF5.js";
import {
  Node3,
  mergeAttributes
} from "./chunk-QYO3DBNN.js";
import {
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// projects/editor/extensions/group/index.ts
var TUI_EDITOR_GROUP_DEFAULT_OPTIONS = {
  groupNodeClass: "tui-group-node",
  groupPointerNodeClass: "tui-group-pointer",
  nested: true,
  draggable: true,
  createOnEnter: false
};
var tuiCreateGroupExtension = (options = {}) => {
  const { draggable, nested, groupNodeClass, groupPointerNodeClass, createOnEnter } = __spreadValues(__spreadValues({}, TUI_EDITOR_GROUP_DEFAULT_OPTIONS), options);
  return Node3.create({
    name: "group",
    draggable,
    group: "block",
    content: nested ? "block+" : "block",
    addAttributes() {
      return {
        style: {
          default: null,
          parseHTML: (element) => element.getAttribute("style"),
          renderHTML: (attributes) => attributes.style ? { style: attributes.style } : {}
        }
      };
    },
    parseHTML() {
      return [{ tag: 'div[data-type="group"]' }];
    },
    renderHTML({ HTMLAttributes }) {
      return ["div", mergeAttributes(HTMLAttributes, { "data-type": "group" }), 0];
    },
    addNodeView() {
      return globalThis.document ? ({ HTMLAttributes, node }) => {
        const dom = document.createElement("div");
        const content = document.createElement("div");
        dom.classList.add(groupNodeClass);
        content.setAttribute("data-type", "group");
        if (HTMLAttributes.style) {
          Object.assign(node.attrs, { style: HTMLAttributes.style });
          content.setAttribute("style", HTMLAttributes.style);
        }
        if (draggable) {
          const pointer = document.createElement("div");
          pointer.classList.add(groupPointerNodeClass);
          pointer.innerHTML = "";
          pointer.contentEditable = "false";
          dom.append(pointer, content);
        } else {
          dom.append(content);
        }
        return { dom, contentDOM: content };
      } : null;
    },
    addCommands() {
      return {
        setGroup: () => ({ commands, state }) => {
          this.editor.chain().focus().run();
          const content = tuiGetSelectedContent(state, "");
          const wrapped = content.trim().startsWith("<p>") ? content : `<p>${content}</p>`;
          const result = `<div data-type="group">${wrapped}</div>`;
          return commands.insertContent(result);
        },
        setGroupHilite: (color) => ({ editor }) => {
          let position = editor.state.selection.$anchor;
          for (let depth = position.depth; depth > 0; depth--) {
            position = editor.state.selection.$anchor;
            const node = position.node(depth);
            if (node.type.name === this.name) {
              setTimeout(() => {
                editor.commands.updateAttributes(node.type, {
                  style: `background: ${color}`
                });
              });
              break;
            }
          }
          return true;
        },
        removeGroup: () => ({ state, dispatch }) => tuiDeleteNode(state, dispatch, this.name)
      };
    },
    addKeyboardShortcuts() {
      return createOnEnter ? { Enter: () => this.editor.commands.setGroup() } : {};
    }
  });
};

export {
  TUI_EDITOR_GROUP_DEFAULT_OPTIONS,
  tuiCreateGroupExtension
};
//# sourceMappingURL=chunk-LRQ53CSP.js.map
