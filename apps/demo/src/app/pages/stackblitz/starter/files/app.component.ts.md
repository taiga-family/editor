```ts
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {defaultEditorExtensions, defaultEditorTools, TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@tinkoff/tui-editor';

@Component({
  selector: `my-app`,
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_EDITOR_EXTENSIONS,
      useValue: defaultEditorExtensions,
    },
  ],
})
export class AppComponent {
  readonly control = new FormControl();

  readonly tools: TuiEditorTool[] = defaultEditorTools;
}
```
