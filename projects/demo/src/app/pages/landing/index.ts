import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    imports: [],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {},
})
export default class Page {}
