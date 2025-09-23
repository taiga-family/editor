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
    provideTuiEditor({
      // You can disable these plugins
      // if you don't need them
      image: true,
      iframe: true,
      video: true,
      source: true,
      audio: true,
      details: true,
      detailsSummary: true,
      detailsContent: true,
    }),
  ],
  // ...
})
export class App {
  readonly tools = TUI_EDITOR_DEFAULT_TOOLS;
  readonly control = new FormControl();
}
```
