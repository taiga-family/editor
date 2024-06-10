```typescript
import {TUI_EDITOR_DEFAULT_EXTENSIONS, TUI_EDITOR_EXTENSIONS} from '@taiga-ui/editor';
// ...

@Component({
  standalone: true,
  // ...
})
export class App {
  readonly control = new FormControl();

  readonly tools: TuiEditorTool[] = TUI_EDITOR_DEFAULT_EXTENSIONS;
}
```
