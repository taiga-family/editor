import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'tuiFilterAnchors',
})
export class TuiFilterAnchorsPipe implements PipeTransform {
    public transform(anchors: string[], prefix: string, currentUrl: string): string[] {
        return prefix === '#' ? anchors.filter(anchor => anchor !== currentUrl) : anchors;
    }
}
