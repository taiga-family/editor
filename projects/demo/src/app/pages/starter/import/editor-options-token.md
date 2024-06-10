```ts
import {tuiEditorOptionsProvider, TuiEditorOptions} from '@taiga-ui/editor';

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
