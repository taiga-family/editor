import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/mention/examples/1/mention/index.html?raw
var mention_default = '<tui-data-list>\n    <div #container>\n        @for (item of getFilteredItems(items, mentionSuggestions()); track item.login) {\n            <button\n                #button\n                tuiOption\n                type="button"\n                (click)="setMention.emit(item)"\n                (keydown.enter)="setMention.emit(item)"\n            >\n                {{ item.name }}\n                <tui-avatar\n                    size="s"\n                    [src]="item.avatar || (item.name | tuiInitials)"\n                />\n            </button>\n        }\n    </div>\n</tui-data-list>\n';
export {
  mention_default as default
};
//# sourceMappingURL=chunk-AY43JKBH.js.map
