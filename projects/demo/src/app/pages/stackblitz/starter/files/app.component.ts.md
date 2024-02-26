```ts
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiRootModule} from '@taiga-ui/core';
import {
  defaultEditorExtensions,
  defaultEditorTools,
  TUI_EDITOR_EXTENSIONS,
  TuiEditorModule,
  TuiEditorSocketModule,
  TuiEditorTool,
} from '@tinkoff/tui-editor';

@Component({
  standalone: true,
  imports: [TuiRootModule, TuiEditorModule, TuiEditorSocketModule, FormsModule, ReactiveFormsModule],
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
