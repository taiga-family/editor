(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[6764],{6764:n=>{n.exports='<button\n    appearance="flat"\n    iconStart="@tui.minus"\n    size="s"\n    tuiIconButton\n    type="button"\n    (click)="decrease()"\n></button>\n<div\n    #fonts\n    [tuiDropdown]="fontsDropdown"\n    [tuiDropdownOpen]="false"\n>\n    <button\n        appearance="flat"\n        size="s"\n        tuiButton\n    >\n        {{ size$ | async }}\n    </button>\n\n    <ng-template #fontsDropdown>\n        <tui-data-list>\n            <button\n                *ngFor="let size of sizes"\n                tuiOption\n                (click)="setFontSize(size)"\n            >\n                {{ size }}\n            </button>\n        </tui-data-list>\n    </ng-template>\n</div>\n\n<button\n    appearance="flat"\n    iconStart="@tui.plus"\n    size="s"\n    tuiIconButton\n    type="button"\n    (click)="increase()"\n></button>\n'}}]);