import"./chunk-DAQOROHW.js";var t=`<tui-editor
    [formControl]="control"
    [tools]="builtInTools"
/>

<div
    class="character-count"
    [class.warning]="characterCount?.characters() === limit"
>
    <tui-progress-circle
        size="xxs"
        [max]="100"
        [value]="percentage"
    />

    {{ characterCount?.characters() }} / {{ limit }} characters
    <br />
    {{ characterCount?.words() }} words
</div>
`;export{t as default};
