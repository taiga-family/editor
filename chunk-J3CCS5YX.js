import {
  finalize,
  forkJoin
} from "./chunk-CJ7OSSQR.js";
import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/upload-files/examples/1/file-loader.ts?raw
function fileLoader(service) {
  return (files) => {
    service.loading$.next(true);
    return forkJoin(files.map((file) => service.upload(file))).pipe(finalize(() => service.loading$.next(false)));
  };
}
export {
  fileLoader
};
//# sourceMappingURL=chunk-J3CCS5YX.js.map
