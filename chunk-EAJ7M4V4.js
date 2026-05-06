import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/upload-files/examples/1/upload.service.ts?raw
var upload_service_default = "import {Injectable} from '@angular/core';\nimport {type TuiEditorAttachedFile} from '@taiga-ui/editor';\nimport {BehaviorSubject, delay, map, type Observable, of} from 'rxjs';\n\n/**\n * Simulates an async file upload by creating a local blob URL.\n * In a real app, replace with an actual HTTP call that returns a hosted URL.\n */\n@Injectable()\nexport class UploadService {\n    public readonly loading$ = new BehaviorSubject(false);\n\n    public upload(file: File): Observable<TuiEditorAttachedFile> {\n        return of(URL.createObjectURL(file)).pipe(\n            delay(300 + Math.floor(Math.random() * 700)),\n            map((link) => ({\n                name: file.name,\n                link,\n                attrs: {class: 'file-link'},\n            })),\n        );\n    }\n}\n";
export {
  upload_service_default as default
};
//# sourceMappingURL=chunk-EAJ7M4V4.js.map
