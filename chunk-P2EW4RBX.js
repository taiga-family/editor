import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/upload-files/examples/1/file-loader.ts?raw
var file_loader_default = "import {type TuiEditorAttachedFile} from '@taiga-ui/editor';\nimport {finalize, forkJoin, type Observable} from 'rxjs';\n\nimport {type UploadService} from './upload.service';\n\nexport function fileLoader(\n    service: UploadService,\n): (files: File[]) => Observable<TuiEditorAttachedFile[]> {\n    return (files: File[]) => {\n        service.loading$.next(true);\n\n        return forkJoin(files.map((file) => service.upload(file))).pipe(\n            finalize(() => service.loading$.next(false)),\n        );\n    };\n}\n";
export {
  file_loader_default as default
};
//# sourceMappingURL=chunk-P2EW4RBX.js.map
