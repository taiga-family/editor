import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'tuiFilterAnchors',
})
export class TuiFilterAnchorsPipe implements PipeTransform {
    transform(anchors: string[], prefix: string, currentUrl: string): string[] {
        return prefix === '#' ? anchors.filter(anchor => anchor !== currentUrl) : anchors;
    }
}
