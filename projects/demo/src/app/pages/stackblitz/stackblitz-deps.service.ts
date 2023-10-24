import {Injectable} from '@angular/core';

@Injectable({
    providedIn: `root`,
})
export class StackblitzDepsService {
    readonly angular = {
        '@angular/cdk': `12.x.x`,
        '@angular/core': `12.x.x`,
        '@angular/common': `12.x.x`,
        '@angular/compiler': `12.x.x`,
        '@angular/forms': `12.x.x`,
        '@angular/localize': `12.x.x`,
        '@angular/platform-browser': `12.x.x`,
        '@angular/platform-browser-dynamic': `12.x.x`,
        '@angular/animations': `12.x.x`,
        '@angular/router': `12.x.x`,
    };

    readonly taiga = {
        '@taiga-ui/cdk': `3.x.x`,
        '@taiga-ui/i18n': `3.x.x`,
        '@taiga-ui/core': `3.x.x`,
        '@taiga-ui/kit': `3.x.x`,
        '@taiga-ui/icons': `3.x.x`,
        '@taiga-ui/styles': `3.x.x`,
    };

    readonly tinkoff = {
        '@tinkoff/tui-editor': `1.x.x`,
        '@tinkoff/ng-polymorpheus': `4.x.x`,
        '@tinkoff/ng-dompurify': `4.x.x`,
        '@tinkoff/ng-event-plugins': `3.x.x`,
    };

    readonly webApis = {
        '@ng-web-apis/common': `3.x.x`,
        '@ng-web-apis/intersection-observer': `3.x.x`,
        '@ng-web-apis/resize-observer': `3.x.x`,
        '@ng-web-apis/mutation-observer': `3.x.x`,
    };

    readonly common = {
        'zone.js': `0.11.8`,
        dompurify: `2.4.5`,
        typescript: `4.3.5`,
        rxjs: `6.6.7`,
    };

    get(): Record<string, string> {
        return {
            ...this.angular,
            ...this.taiga,
            ...this.webApis,
            ...this.common,
            ...this.tinkoff,
        };
    }
}
