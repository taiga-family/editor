import type {TuiEditorAttachedFile} from '@tbank/tui-editor';
import type {Observable} from 'rxjs';
import {finalize, forkJoin} from 'rxjs';

import type {FileIoService} from './filesio.service';

export function fileLoader(
    service: FileIoService,
): (files: File[]) => Observable<TuiEditorAttachedFile[]> {
    return (files: File[]) => {
        service.loading$.next(true);

        return forkJoin(files.map(file => service.upload(file))).pipe(
            finalize(() => service.loading$.next(false)),
        );
    };
}
