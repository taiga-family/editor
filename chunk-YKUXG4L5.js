import"./chunk-DAQOROHW.js";var i=`<div
    #dropdown
    tuiDropdownAlign="start"
    tuiDropdownDirection="bottom"
    tuiDropdownLimitWidth="auto"
    [tuiDropdown]="smileDropdown"
    [tuiDropdownMinHeight]="0"
    [tuiDropdownOpen]="false"
>
    <button
        appearance="icon"
        automation-id="smiles-tool__button"
        iconStart="@tui.star"
        size="s"
        tuiIconButton
        tuiToolbarTool
        type="button"
        class="tool-button"
    >
        Smile tool
    </button>
    <ng-template #smileDropdown>
        <div class="smiles">
            @for (smile of smiles; track smile) {
                <button
                    type="button"
                    class="smile"
                    [innerHTML]="smile"
                    (click)="insertSmile(smile)"
                ></button>
            }
        </div>
    </ng-template>
</div>
`;export{i as default};
