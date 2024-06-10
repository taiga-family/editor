import {Injectable} from '@angular/core';
import type {TuiEditorAttachedFile} from '@taiga-ui/editor';
import type {Observable} from 'rxjs';
import {BehaviorSubject, from, map} from 'rxjs';

/**
 * @description:
 * You can get your credentials for testing API
 * by free file.io account:
 * https://www.file.io/plans
 */
const fileIO = {
    host: 'https://file.io/',
    autoDelete: 'true',
    expires: '1d',
};

@Injectable({
    providedIn: 'root',
})
export class FileIoService {
    public readonly loading$ = new BehaviorSubject(false);

    public upload(file: File): Observable<TuiEditorAttachedFile> {
        const body = new FormData();

        body.append('file', file, file.name);
        body.append('expires', fileIO.expires);
        body.append('autoDelete', fileIO.autoDelete);

        return from(
            fetch(fileIO.host, {
                method: 'POST',
                body,
            }).then(async (response: Response) => response.json()),
        ).pipe(map(result => ({name: result.name, link: result.link})));
    }
}
