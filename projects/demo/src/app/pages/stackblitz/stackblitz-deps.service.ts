import {Injectable} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk';

@Injectable({providedIn: `root`})
export class StackblitzDepsService {
    async get(): Promise<Record<string, string>> {
        const {dependencies: demoDeps} = await import(`@taiga-ui/submodule-demo-package`);
        const {dependencies: cdkDeps} = await import(`@taiga-ui/submodule-cdk-package`);
        const {dependencies, devDependencies} = await import(
            `@taiga-ui/submodule-package`
        );

        return {
            '@angular/cdk': dependencies[`@angular/cdk`],
            '@angular/core': dependencies[`@angular/core`],
            '@angular/common': dependencies[`@angular/common`],
            '@angular/compiler': dependencies[`@angular/compiler`],
            '@angular/forms': dependencies[`@angular/forms`],
            '@angular/localize': dependencies[`@angular/localize`],
            '@angular/platform-browser': dependencies[`@angular/platform-browser`],
            '@angular/platform-browser-dynamic':
                dependencies[`@angular/platform-browser-dynamic`],
            '@angular/animations': dependencies[`@angular/animations`],
            '@angular/router': dependencies[`@angular/router`],
            '@taiga-ui/cdk': TUI_VERSION,
            '@taiga-ui/i18n': TUI_VERSION,
            '@taiga-ui/core': TUI_VERSION,
            '@taiga-ui/kit': TUI_VERSION,
            '@taiga-ui/icons': TUI_VERSION,
            '@taiga-ui/styles': TUI_VERSION,
            '@ng-web-apis/common': cdkDeps[`@ng-web-apis/common`],
            '@ng-web-apis/resize-observer': cdkDeps[`@ng-web-apis/resize-observer`],
            '@ng-web-apis/mutation-observer': cdkDeps[`@ng-web-apis/mutation-observer`],
            'zone.js': dependencies[`zone.js`],
            dompurify: demoDeps.dompurify,
            typescript: devDependencies.typescript,
            rxjs: dependencies.rxjs,
            '@tinkoff/tui-editor': `1.x.x`,
            '@tinkoff/ng-polymorpheus': cdkDeps[`@tinkoff/ng-polymorpheus`],
            '@tinkoff/ng-dompurify': demoDeps[`@tinkoff/ng-dompurify`],
            '@tinkoff/ng-event-plugins': cdkDeps[`@tinkoff/ng-event-plugins`],
        };
    }
}
