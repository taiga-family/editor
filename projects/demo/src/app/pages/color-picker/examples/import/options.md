```ts
@Component({
  standalone: true,
  providers: [
    tuiColorSelectorOptionsProvider({
      selectorMode: false, // can't switch beetween solid color and gradient
      mode: TuiColorSelectorMode.Gradient, // default mode
      color: [0, 0, 0, 1],
      colors: new Map<string, string>(),

      // customization for gradient mode
      gradient: {
        icons: {
          'to top right': `tuiIconArrowUpRight`,
          'to right': `tuiIconArrowRight`,
          'to bottom right': `tuiIconArrowDownRight`,
          'to bottom': `tuiIconArrowDown`,
          'to bottom left': `tuiIconArrowDownLeft`,
          'to left': `tuiIconArrowLeft`,
          'to top left': `tuiIconArrowUpLeft`,
          'to top': `tuiIconArrowUp`,
        },
        steps: [
          [0, [0, 0, 0, 1]],
          [1, [255, 255, 255, 1]],
        ],
        stop: 0,
        direction: `to bottom`,
        emptyStop: [0, 0, 0, 0],
        buttons: [
          `to top right`,
          `to right`,
          `to bottom right`,
          `to bottom`,
          `to bottom left`,
          `to left`,
          `to top left`,
          `to top`,
        ],
      },
    }),
  ],
})
export class MyComponent {}
```
