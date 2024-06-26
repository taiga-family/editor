```ts
import {TuiEditor, TUI_EDITOR_EXTENSIONS, TUI_EDITOR_DEFAULT_EXTENSIONS} from '@taiga-ui/editor';
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
})
export class App {}
```
