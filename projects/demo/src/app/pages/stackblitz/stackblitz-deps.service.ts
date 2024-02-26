import {Injectable} from '@angular/core';
// import {TUI_VERSION} from '@taiga-ui/cdk';

@Injectable({providedIn: 'root'})
export class StackblitzDepsService {
    async get(): Promise<Record<string, string>> {
        // const {dependencies: demoDeps} = await import('@taiga-ui/submodule-demo-package');
        // const {dependencies: cdkDeps} = await import('@taiga-ui/submodule-cdk-package');
        const {devDependencies} = await import('@taiga-ui/submodule-package');

        return {
            '@angular/cdk': devDependencies['@angular/cdk'],
            '@angular/compiler': devDependencies['@angular/cdk'],
            '@angular/core': devDependencies['@angular/core'],
            '@angular/common': devDependencies['@angular/common'],
            '@angular/forms': devDependencies['@angular/forms'],
            '@angular/platform-browser': devDependencies['@angular/platform-browser'],
            '@angular/animations': devDependencies['@angular/animations'],
            '@angular/router': devDependencies['@angular/router'],
            '@taiga-ui/cdk': 'latest',
            '@taiga-ui/i18n': 'latest',
            '@taiga-ui/core': 'latest',
            '@taiga-ui/kit': 'latest',
            '@taiga-ui/icons': 'latest',
            '@taiga-ui/styles': 'latest',
            '@ng-web-apis/common': 'latest',
            '@ng-web-apis/resize-observer': 'latest',
            '@ng-web-apis/mutation-observer': 'latest',
            // 'zone.js': demoDeps['zone.js'],
            // dompurify: demoDeps.dompurify,
            typescript: devDependencies.typescript,
            // rxjs: dependencies.rxjs,
            '@tinkoff/tui-editor': '1.x.x',
            // '@tinkoff/ng-polymorpheus': cdkDeps['@tinkoff/ng-polymorpheus'],
            // '@tinkoff/ng-dompurify': demoDeps['@tinkoff/ng-dompurify'],
            // '@tinkoff/ng-event-plugins': cdkDeps['@tinkoff/ng-event-plugins'],
        };
    }
}
