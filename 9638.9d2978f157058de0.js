(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[9638],{89638:o=>{o.exports="```ts\nimport 'zone.js';\n\nimport {importProvidersFrom} from '@angular/core';\nimport {bootstrapApplication} from '@angular/platform-browser';\nimport {provideAnimations} from '@angular/platform-browser/animations';\nimport {tuiSvgOptionsProvider} from '@taiga-ui/core';\nimport {NgDompurifySanitizer} from '@taiga-ui/dompurify';\nimport {AppComponent} from './app/app.component';\n\nbootstrapApplication(AppComponent, {\n  providers: [\n    provideAnimations(),\n    tuiSvgOptionsProvider({\n      path: 'https://taiga-ui.dev/assets/taiga-ui/icons',\n    }),\n  ],\n}).catch(err => console.error(err));\n```\n"}}]);