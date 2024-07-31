```typescript
import {TUI_EDITOR_DEFAULT_TOOLS} from '@taiga-ui/editor';
// ...

@Component({
  standalone: true,
  imports: [
    // ..
    TuiEditor,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: TUI_EDITOR_EXTENSIONS,
      useValue: TUI_EDITOR_DEFAULT_EXTENSIONS,
    },
  ],
  // ...
})
export class App {
  readonly tools = TUI_EDITOR_DEFAULT_TOOLS;
  readonly control = new FormControl();
}
```
