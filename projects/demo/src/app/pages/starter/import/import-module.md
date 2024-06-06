```ts
import {TuiEditorModule} from '@tbank/tui-editor';
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
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
    {
      provide: TUI_EDITOR_EXTENSIONS,
      useValue: TUI_EDITOR_DEFAULT_EXTENSIONS,
    },
  ],
})
export class App {}
```
