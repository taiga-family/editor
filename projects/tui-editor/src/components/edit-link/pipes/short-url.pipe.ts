import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';

const MAX_LENGTH = 60;
const START = MAX_LENGTH - 20;
const END = MAX_LENGTH - START - 10;

@Pipe({
    standalone: true,
    name: 'tuiShortUrl',
})
export class TuiShortUrlPipe implements PipeTransform {
    public transform(url: string): string {
        return url.length < MAX_LENGTH
            ? url
            : `${url.slice(0, Math.max(0, START))}...${url.slice(url.length - END)}`;
    }
}
