```typescript
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';

// ...

@Component({
  // ...
  providers: [
    {
      provide: TUI_EDITOR_EXTENSIONS,
      useValue: defaultEditorExtensions,
    },
  ],
})
export class myComponent {}
```
