import {Injectable} from '@angular/core';
import {type TuiEditorAttachedFile} from '@taiga-ui/editor';
import {BehaviorSubject, delay, map, of, type Observable} from 'rxjs';

/**
 * Simulates an async file upload by creating a local blob URL.
 * In a real app, replace with an actual HTTP call that returns a hosted URL.
 */
@Injectable()
export class UploadService {
    public readonly loading$ = new BehaviorSubject(false);

    public upload(file: File): Observable<TuiEditorAttachedFile> {
        return of(URL.createObjectURL(file)).pipe(
            delay(300 + Math.floor(Math.random() * 700)),
            map((link) => ({
                name: file.name,
                link,
                attrs: {class: 'file-link'},
            })),
        );
    }
}
