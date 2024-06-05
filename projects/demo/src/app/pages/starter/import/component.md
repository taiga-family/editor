```typescript
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@tbank/tui-editor';
// ...

@Component({
  // ...
})
export class AppComponent {
  readonly control = new FormControl();

  readonly tools: TuiEditorTool[] = defaultEditorTools;
}
```
