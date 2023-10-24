```html
<tui-root>
  <tui-editor
    [formControl]="control"
    [tools]="tools"
  >
    Start typing
  </tui-editor>

  <h4>HTML:</h4>
  <tui-editor-socket
    class="tui-example"
    [content]="control.value"
  ></tui-editor-socket>

  <h4>Text:</h4>
  <p>{{ control.value }}</p>
</tui-root>
```
