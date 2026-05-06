import {Pipe, type PipeTransform} from '@angular/core';
import {Converter} from 'showdown';

@Pipe({name: 'makeMarkdown'})
export class MakeMarkdownPipe implements PipeTransform {
    public transform(html?: string | null): any {
        return new Converter().makeMarkdown(
            html?.replaceAll('&lt;', '<').replaceAll('&gt;', '>') ?? '',
        );
    }
}
