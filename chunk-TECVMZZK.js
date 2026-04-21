import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/images/upload/examples/1/image-loader.ts?raw
var image_loader_default = "import {delay, finalize, fromEvent, map, type Observable, switchMap} from 'rxjs';\n\nimport {type ImgbbService} from './imgbb.service';\n\nexport function imageLoader(service: ImgbbService): (file: File) => Observable<string> {\n    return (file: File) => {\n        const fileReader = new FileReader();\n\n        service.loading$.next(true);\n        fileReader.readAsDataURL(file);\n\n        return fromEvent(fileReader, 'load').pipe(\n            delay(2000), // for simulate throttle network\n            map(() => String(fileReader.result)),\n            switchMap((base64) => service.save(base64)),\n            finalize(() => service.loading$.next(false)),\n        );\n    };\n}\n";
export {
  image_loader_default as default
};
//# sourceMappingURL=chunk-TECVMZZK.js.map
