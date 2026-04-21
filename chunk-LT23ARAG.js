import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/custom-tool/color-picker/examples/1/custom-color-picker/index.html?raw
var custom_color_picker_default = `<div>
    <button
        appearance="icon"
        automation-id="toolbar__color-button"
        size="s"
        tuiDropdownAlign="left"
        tuiDropdownDirection="bottom"
        tuiDropdownLimitWidth="auto"
        tuiIconButton
        tuiToolbarTool
        type="button"
        [iconStart]="icon() || ''"
        [tuiDropdown]="colorDropdown"
        [tuiDropdownMinHeight]="0"
        [tuiDropdownOpen]="false"
    >
        Color options
    </button>
    <div
        tuiPlate
        [style.background]="fontColor$ | async"
    ></div>
</div>

<ng-template #colorDropdown>
    <tui-color-selector
        [color]="selectedColor"
        [colors]="colors"
        (colorChange)="onValueChange($event)"
    />

    <button
        appearance="flat"
        size="m"
        tuiButton
        type="button"
        class="t-color-save"
        (click)="setColor()"
    >
        Apply
    </button>
</ng-template>
`;
export {
  custom_color_picker_default as default
};
//# sourceMappingURL=chunk-LT23ARAG.js.map
