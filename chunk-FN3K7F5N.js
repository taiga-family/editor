import"./chunk-DAQOROHW.js";var r=`import {type TuiEditorAttachedFile} from '@taiga-ui/editor';
import {finalize, forkJoin, type Observable} from 'rxjs';

import {type UploadService} from './upload.service';

export function fileLoader(
    service: UploadService,
): (files: File[]) => Observable<TuiEditorAttachedFile[]> {
    return (files: File[]) => {
        service.loading$.next(true);

        return forkJoin(files.map((file) => service.upload(file))).pipe(
            finalize(() => service.loading$.next(false)),
        );
    };
}
`;export{r as default};
