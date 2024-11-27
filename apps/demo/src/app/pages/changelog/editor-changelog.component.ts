import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {tuiRawLoad} from '@taiga-ui/addon-doc';
import {of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
    selector: 'changelog',
    templateUrl: './editor-changelog.template.html',
    styleUrls: ['./editor-changelog.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiChangelogComponent {
    readonly changelog$ = of(import('../../../../../../CHANGELOG.md?raw')).pipe(
        switchMap(tuiRawLoad),
    );
}