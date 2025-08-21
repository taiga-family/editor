import {type TuiEditorAttachedFile} from '@taiga-ui/editor';
import {finalize, forkJoin, type Observable} from 'rxjs';

import {type FileIoService} from './filesio.service';

export function fileLoader(
    service: FileIoService,
): (files: File[]) => Observable<TuiEditorAttachedFile[]> {
    return (files: File[]) => {
        service.loading$.next(true);

        return forkJoin(files.map((file) => service.upload(file))).pipe(
            finalize(() => service.loading$.next(false)),
        );
    };
}
