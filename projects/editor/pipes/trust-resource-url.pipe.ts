import {inject, Pipe, type PipeTransform} from '@angular/core';
import {DomSanitizer, type SafeResourceUrl} from '@angular/platform-browser';

@Pipe({name: 'tuiTrustResourceUrl'})
export class TuiTrustResourceUrlPipe implements PipeTransform {
    private readonly sanitizer = inject(DomSanitizer);

    public transform(src?: string | null): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(src ?? '');
    }
}
