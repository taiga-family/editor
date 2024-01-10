import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocPageModule, TuiMarkdownPipe} from '@taiga-ui/addon-doc';
import {TuiStringHandler} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    selector: 'changelog',
    imports: [AsyncPipe, TuiDocPageModule, TuiMarkdownPipe],
    templateUrl: './editor-changelog.template.html',
    styleUrls: ['./editor-changelog.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TuiChangelogComponent {
    readonly changelog = import('../../../../../tui-editor/CHANGELOG.md?raw');

    mapper: TuiStringHandler<string> = value =>
        value.replaceAll(
            'All notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines.',
            '',
        );
}
