```ts
import {TuiEditorModule} from '@tbank/tui-editor';
// ...

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    // ..
    TuiEditorModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
    {
      provide: TUI_EDITOR_EXTENSIONS,
      useValue: defaultEditorExtensions,
    },
  ],
})
export class AppModule {}
```
