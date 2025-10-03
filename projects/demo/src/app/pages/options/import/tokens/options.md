```ts
import {provideTuiEditorOptions, TuiEditorOptions} from '@taiga-ui/editor';

@Component({
  standalone: true,
  //...
  providers: [
    // ..
    provideTuiEditorOptions({
      textColors: new Map([
        ['red', 'rgba(244, 87, 37, 1)'],
        ['blue', 'var(--tui-background-accent-1)'],
      ]),
      backgroundColors: new Map([
        ['red', 'rgba(244, 87, 37, 1)'],
        ['blue', 'var(--tui-background-accent-1)'],
      ]),
      //...
    }),
  ],
})
export class Example {}
```
