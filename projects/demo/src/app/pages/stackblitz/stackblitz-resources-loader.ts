import {tuiRawLoad, tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';

interface TuiProjectFiles {
    angularJson: string;
    indexHtml: string;
    mainTs: string;
    polyfills: string;
    styles: string;
    tsconfig: string;
}

export abstract class AbstractTuiStackblitzResourcesLoader {
    static async getProjectFiles(): Promise<TuiProjectFiles> {
        const [
            configsContent,
            mainTsContent,
            indexHtmlContent,
            polyfillsContent,
            stylesContent,
        ]: string[] = await Promise.all(
            [
                import(`./project-files/configs.md?raw`),
                import(`./project-files/src/main.ts.md?raw`),
                import(`./project-files/src/index.html.md?raw`),
                import(`./project-files/src/polyfills.ts.md?raw`),
                import(`./project-files/src/styles.less.md?raw`),
            ].map(tuiRawLoad),
        );

        const [angularJson, tsconfig] = tuiTryParseMarkdownCodeBlock(configsContent);
        const [mainTs] = tuiTryParseMarkdownCodeBlock(mainTsContent);
        const [indexHtml] = tuiTryParseMarkdownCodeBlock(indexHtmlContent);
        const [polyfills] = tuiTryParseMarkdownCodeBlock(polyfillsContent);
        const [styles] = tuiTryParseMarkdownCodeBlock(stylesContent);

        return {angularJson, tsconfig, mainTs, indexHtml, polyfills, styles};
    }
}
