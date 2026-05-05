import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-KCQY4XIQ.js";
import {
  BehaviorSubject,
  delay,
  map,
  of
} from "./chunk-JJYTWBAH.js";
import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/upload-files/examples/1/upload.service.ts?raw
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
  UploadService
};
//# sourceMappingURL=chunk-URTNC7Z6.js.map
