```ts
import {TuiEditorModule, TUI_EDITOR_EXTENSIONS, TUI_EDITOR_DEFAULT_EXTENSIONS} from '@tbank/tui-editor';
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
      deps: [INJECTOR],
      useFactory: (injector: Injector) => [
        ...TUI_EDITOR_DEFAULT_EXTENSIONS,
        import('@tbank/tui-editor/extensions/image-editor').then(({tuiCreateImageEditorExtension}) =>
          tuiCreateImageEditorExtension({injector}),
        ),
      ],
    },
  ],
})
export class AppModule {}
```
