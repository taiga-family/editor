```typescript
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';
// ...

@Component({
  // ...
})
export class AppComponent {
  readonly control = new FormControl();

  readonly tools: TuiEditorTool[] = defaultEditorTools;
}
```
