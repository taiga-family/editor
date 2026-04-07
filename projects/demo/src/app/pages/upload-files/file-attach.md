```ts
@Injectable({
  providedIn: `root`,
})
export class UploadService {
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
        accept: '.pdf, .doc, .docx, .xls, .xlsx',
      },
    },
    {
      provide: TUI_ATTACH_FILES_LOADER,
      deps: [UploadService],
      useFactory(service: UploadService) {
        return (files: File[]) => forkJoin(files.map((file) => service.upload(file)));
      },
    },
  ],
})
export class Example {
  @ViewChild(TuiEditor)
  private readonly wysiwyg?: TuiEditor;

  readonly tools = [TuiEditorTool.Attach];

  control = new FormControl('');

  attach(files: TuiEditorAttachedFile[]): void {
    files.forEach((file) => this.wysiwyg?.editor?.setFileLink(file));
  }
}
```
