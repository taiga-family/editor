import {
  BehaviorSubject,
  Injectable,
  delay,
  finalize,
  forkJoin,
  map,
  of,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-KFKFA6WT.js";

// projects/demo/src/app/pages/upload-files/examples/1/file-loader.ts
function fileLoader(service) {
  return (files) => {
    service.loading$.next(true);
    return forkJoin(files.map((file) => service.upload(file))).pipe(finalize(() => service.loading$.next(false)));
  };
}

// projects/demo/src/app/pages/upload-files/examples/1/upload.service.ts
var _UploadService = class _UploadService {
  constructor() {
    this.loading$ = new BehaviorSubject(false);
  }
  upload(file) {
    return of(URL.createObjectURL(file)).pipe(delay(300 + Math.floor(Math.random() * 700)), map((link) => ({
      name: file.name,
      link,
      attrs: { class: "file-link" }
    })));
  }
};
_UploadService.\u0275fac = function UploadService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UploadService)();
};
_UploadService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UploadService, factory: _UploadService.\u0275fac });
var UploadService = _UploadService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadService, [{
    type: Injectable
  }], null, null);
})();

export {
  fileLoader,
  UploadService
};
//# sourceMappingURL=chunk-J5COV7YV.js.map
