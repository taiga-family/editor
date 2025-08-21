import {delay, finalize, fromEvent, map, type Observable, switchMap} from 'rxjs';

import {type ImgbbService} from './imgbb.service';

export function imageLoader(service: ImgbbService): (file: File) => Observable<string> {
    return (file: File) => {
        const fileReader = new FileReader();

        service.loading$.next(true);
        fileReader.readAsDataURL(file);

        return fromEvent(fileReader, 'load').pipe(
            delay(2000), // for simulate throttle network
            map(() => String(fileReader.result)),
            switchMap((base64) => service.save(base64)),
            finalize(() => service.loading$.next(false)),
        );
    };
}
