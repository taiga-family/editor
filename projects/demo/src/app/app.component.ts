import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    OnInit,
} from '@angular/core';
import {Router} from '@angular/router';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {TUI_DOC_PAGE_LOADED} from '@taiga-ui/addon-doc';
import {TuiModeDirective} from '@taiga-ui/core';
import pkg from '@tinkoff/tui-editor/package.json';
import {Observable} from 'rxjs';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TuiModeDirective,
            useExisting: null,
        },
    ],
})
export class TuiAppComponent implements OnInit {
    @HostBinding('class._loaded')
    readonly pageLoadedInit = '0';

    @HostBinding('$.class._loaded')
    readonly pageLoaded = this.pageLoaded$;

    version = pkg.version;

    constructor(
        @Inject(TUI_DOC_PAGE_LOADED) private readonly pageLoaded$: Observable<boolean>,
        @Inject(Router) protected readonly router: Router,
        @Inject(LOCAL_STORAGE) protected readonly storage: Storage,
    ) {}

    ngOnInit(): void {
        void this.replaceEnvInURI();
    }

    protected async replaceEnvInURI(): Promise<void> {
        const env = this.storage.getItem('env');

        if (env) {
            this.storage.removeItem('env');
            await this.router.navigateByUrl(env);
        }
    }
}
