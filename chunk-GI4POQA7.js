import"./chunk-DAQOROHW.js";var i=`<tui-editor
    class="editor"
    [formControl]="control"
>
    Typing...
</tui-editor>

<p class="status">
    touched: {{ control.touched }} \xB7 dirty: {{ control.dirty }} \xB7 invalid: {{ control.invalid }} \xB7 disabled:
    {{ control.disabled }}
</p>

<tui-error [formControl]="control" />

<button
    tuiButton
    type="button"
    (click)="reset()"
>
    Reset
</button>

<button
    tuiButton
    type="button"
    (click)="toggleDisabled()"
>
    Toggle disabled
</button>

<button
    data-testid="outside"
    tuiButton
    type="button"
>
    Outside
</button>
`;export{i as default};
