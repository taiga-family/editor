import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class StackblitzDepsService {
    public get(): Record<string, string> {
        return {
            '@angular/cdk': '17.x.x',
            '@angular/compiler': '17.x.x',
            '@angular/core': '17.x.x',
            '@angular/common': '17.x.x',
            '@angular/forms': '17.x.x',
            '@angular/platform-browser': '17.x.x',
            '@angular/animations': '17.x.x',
            '@angular/router': '17.x.x',
            '@taiga-ui/cdk': 'latest',
            '@taiga-ui/i18n': 'latest',
            '@taiga-ui/core': 'latest',
            '@taiga-ui/kit': 'latest',
            '@taiga-ui/icons': 'latest',
            '@taiga-ui/styles': 'latest',
            '@ng-web-apis/common': 'latest',
            '@ng-web-apis/mutation-observer': 'latest',
            '@ng-web-apis/resize-observer': 'latest',
            '@tinkoff/ng-event-plugins': 'latest',
            '@tinkoff/ng-polymorpheus': 'latest',
            '@tinkoff/ng-dompurify': 'latest',
            dompurify: 'latest',
            punycode: 'latest',
            typescript: '5.3.x',
            '@taiga-ui/editor': '1.x.x',
        };
    }
}
