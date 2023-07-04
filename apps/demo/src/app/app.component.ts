import {ChangeDetectionStrategy, Component} from '@angular/core';
import pkg from '@tinkoff/tui-editor/package.json';

@Component({
    selector: 'tui-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAppComponent {
    version = pkg.version;
}
