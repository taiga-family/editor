import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/custom-tool/paste-emoji/examples/1/smiles-tool/smiles-tool.template.html?raw
var smiles_tool_template_default = '<div\n    #dropdown\n    tuiDropdownAlign="start"\n    tuiDropdownDirection="bottom"\n    tuiDropdownLimitWidth="auto"\n    [tuiDropdown]="smileDropdown"\n    [tuiDropdownMinHeight]="0"\n    [tuiDropdownOpen]="false"\n>\n    <button\n        appearance="icon"\n        automation-id="smiles-tool__button"\n        iconStart="@tui.star"\n        size="s"\n        tuiIconButton\n        tuiToolbarTool\n        type="button"\n        class="tool-button"\n    >\n        Smile tool\n    </button>\n    <ng-template #smileDropdown>\n        <div class="smiles">\n            @for (smile of smiles; track smile) {\n                <button\n                    type="button"\n                    class="smile"\n                    [innerHTML]="smile"\n                    (click)="insertSmile(smile)"\n                ></button>\n            }\n        </div>\n    </ng-template>\n</div>\n';
export {
  smiles_tool_template_default as default
};
//# sourceMappingURL=chunk-6NU7RO4O.js.map
