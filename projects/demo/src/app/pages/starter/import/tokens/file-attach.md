```ts
@Injectable({
  providedIn: `root`,
})
export class MyUploadService {
  readonly loading$ = new BehaviorSubject(false);

  upload(file: File): Observable<TuiEditorAttachedFile> {
    const body = new FormData();

    body.append(`file`, file, file.name);

    return from(fetch('https://cloud', {method: `POST`, body}).then(async (response: Response) => response.json()));
  }
}

@Component({
  standalone: true,
  template: `
    <tui-editor
      [formControl]="control"
      [tools]="tools"
      (fileAttached)="attach($event)"
    ></tui-editor>
  `,
  providers: [
    {
      provide: TUI_ATTACH_FILES_OPTIONS,
      useValue: {
        multiple: true,
        accept: '.pdf, .doc, .docx .xls, .xlsx',
      },
    },
    {
      provide: TUI_ATTACH_FILES_LOADER,
      deps: [MyUploadService],
      useFactory(service: MyUploadService) {
        return (files: File[]) => forkJoin(files.map(file => service.upload(file)));
      },
    },
  ],
})
export class Example {
  @ViewChild(TuiEditorComponent)
  private readonly wysiwyg?: TuiEditorComponent;

  readonly tools = [TuiEditorTool.Attach];

  control = new FormControl('');

  /**
   * @note: attach file as a link
   * you can also implement your own file mapping mechanism
   * because you have all the necessary data for this
   */
  attach(files: TuiEditorAttachedFile[]): void {
    files.forEach(file => this.wysiwyg?.editor?.setFileLink(file));
  }
}
```
