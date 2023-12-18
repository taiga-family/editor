import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    OnInit,
} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {TUI_DOC_PAGE_LOADED, TuiDocMainModule} from '@taiga-ui/addon-doc';
import {TuiPreviewModule} from '@taiga-ui/addon-preview';
import {TuiLinkModule, TuiModeModule, TuiRootModule} from '@taiga-ui/core';
import pkg from '@tinkoff/tui-editor/package.json';
import {Observable} from 'rxjs';

@Component({
    standalone: true,
    selector: 'app',
    imports: [
        RouterLink,
        TuiRootModule,
        TuiModeModule,
        TuiLinkModule,
        TuiDocMainModule,
        TuiPreviewModule, // TODO: why?
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
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
