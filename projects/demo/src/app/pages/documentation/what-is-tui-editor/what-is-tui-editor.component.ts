import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'what-is-tui-editor-page',
    templateUrl: './what-is-tui-editor.template.html',
    styleUrls: ['./what-is-tui-editor.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatIsTuiEditorPageComponent {}
