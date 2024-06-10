```ts
import {ChangeDetectionStrategy, Component, Injector, INJECTOR} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiRootModule} from '@taiga-ui/core';
import {
  TUI_EDITOR_DEFAULT_EDITOR_TOOLS,
  TUI_EDITOR_DEFAULT_EXTENSIONS,
  TUI_EDITOR_EXTENSIONS,
  TuiEditorModule,
  TuiEditorSocketModule,
  TuiEditorTool,
} from '@taiga-ui/editor';

@Component({
  standalone: true,
  imports: [TuiRootComponent, TuiEditor, TuiEditorSocket, FormsModule, ReactiveFormsModule],
  selector: `my-app`,
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_EDITOR_EXTENSIONS,
      deps: [INJECTOR],
      useFactory: (injector: Injector) => [
        ...TUI_EDITOR_DEFAULT_EXTENSIONS,
        import('@taiga-ui/editor/extensions/image-editor').then(({tuiCreateImageEditorExtension}) =>
          tuiCreateImageEditorExtension({injector}),
        ),
      ],
    },
  ],
})
export class App {
  readonly control = new FormControl();

  readonly tools: TuiEditorTool[] = TUI_EDITOR_DEFAULT_EDITOR_TOOLS;
}
```
