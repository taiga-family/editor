```ts
import {tuiEditorOptionsProvider, TuiEditorOptions} from '@tbank/tui-editor';

@Component({
  standalone: true,
  //...
  providers: [
    // ..
    tuiEditorOptionsProvider({
      colors: new Map([
        ['red', 'rgba(244, 87, 37, 1)'],
        ['blue', 'var(--tui-primary)'],
      ]),
      //...
    }),
  ],
})
export class My {}
```
