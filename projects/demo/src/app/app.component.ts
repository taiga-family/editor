import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TUI_SANITIZER} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

import {DemoPath} from './constants/demo-path';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.style.less'],
    providers: [
        {
            provide: TUI_SANITIZER,
            useClass: NgDompurifySanitizer,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    readonly stackblitzStarterPath = `/${DemoPath.Stackblitz}`;
}
