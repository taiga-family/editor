import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {TuiDocPageModule, tuiRawLoad} from '@taiga-ui/addon-doc';
import MarkdownIt from 'markdown-it';
import {map, of, switchMap} from 'rxjs';

@Component({
    standalone: true,
    selector: 'changelog',
    imports: [AsyncPipe, TuiDocPageModule],
    templateUrl: './editor-changelog.template.html',
    styleUrls: ['./editor-changelog.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TuiChangelogComponent {
    readonly changelog$ = of(import('../../../../../tui-editor/CHANGELOG.md?raw')).pipe(
        switchMap(tuiRawLoad),
        map((value: string) =>
            new MarkdownIt()
                .render(
                    value
                        .replaceAll(
                            'All notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines.',
                            '',
                        )
                        .replace(/# Change Log\n/g, '')
                        .trim(),
                )
                .replace(/h1|h2|h3|h4|h5|h6/g, 'h2'),
        ),
    );
}
