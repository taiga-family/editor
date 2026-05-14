import"./chunk-DAQOROHW.js";var o=`<tui-editor
    placeholder="Required text *"
    [formControl]="control"
    [tools]="builtInTools"
    [tuiDropdownOpen]="isMentionMode"
>
    <ng-container *tuiDropdown>
        <mentions
            [mentionSuggestions]="mentionSuggestions"
            (setMention)="setMention($event)"
        />
    </ng-container>
</tui-editor>

<tui-accordion [closeOthers]="false">
    <button [tuiAccordion]="isE2E">HTML</button>
    <tui-expand>
        <ng-container *tuiItem>
            <tui-editor-socket [content]="control.value" />
        </ng-container>
    </tui-expand>

    <button [tuiAccordion]="isE2E">Text</button>
    <tui-expand>
        <ng-container *tuiItem>
            <span class="code">{{ control.value }}</span>
        </ng-container>
    </tui-expand>
</tui-accordion>
`;export{o as default};
