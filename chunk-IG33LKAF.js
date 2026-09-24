import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/mention/examples/1/mention/index.html?raw
var mention_default = '<tui-data-list>\n    <div #container>\n        @let filtered = items | filterItems: mentionSuggestions();\n\n        @for (item of filtered; track item.login) {\n            <button\n                #button\n                tuiOption\n                type="button"\n                (click)="setMention.emit(item)"\n                (keydown.enter.prevent)="setMention.emit(item)"\n            >\n                {{ item.name }}\n                <span\n                    size="s"\n                    [tuiAvatar]="item.name | tuiInitials"\n                >\n                    @if (item.avatar) {\n                        <img\n                            alt=""\n                            [src]="item.avatar"\n                        />\n                    }\n                </span>\n            </button>\n        }\n    </div>\n</tui-data-list>\n';
export {
  mention_default as default
};
//# sourceMappingURL=chunk-IG33LKAF.js.map
