import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/font/examples/3/font-size-tool/index.html?raw
var font_size_tool_default = '<button\n    appearance="flat"\n    iconStart="@tui.minus"\n    size="s"\n    tuiIconButton\n    tuiToolbarTool\n    type="button"\n    (click)="decrease()"\n>\n    Decrease size\n</button>\n<div\n    #fonts\n    tuiDropdownAlign="start"\n    tuiDropdownDirection="bottom"\n    tuiDropdownLimitWidth="auto"\n    [tuiDropdown]="fontsDropdown"\n    [tuiDropdownMinHeight]="0"\n    [tuiDropdownOpen]="false"\n>\n    <button\n        appearance="flat"\n        size="s"\n        tuiButton\n        tuiToolbarTool\n        type="button"\n    >\n        {{ size$ | async }}\n    </button>\n\n    <ng-template #fontsDropdown>\n        <tui-data-list>\n            @for (size of sizes; track size) {\n                <button\n                    tuiOption\n                    type="button"\n                    (click)="setFontSize(size)"\n                >\n                    {{ size }}\n                </button>\n            }\n        </tui-data-list>\n    </ng-template>\n</div>\n\n<button\n    appearance="flat"\n    iconStart="@tui.plus"\n    size="s"\n    tuiIconButton\n    tuiToolbarTool\n    type="button"\n    (click)="increase()"\n>\n    Increase size\n</button>\n';
export {
  font_size_tool_default as default
};
//# sourceMappingURL=chunk-UTYA45AO.js.map
