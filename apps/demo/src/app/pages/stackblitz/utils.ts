import type {Project} from '@stackblitz/sdk';
import {TUI_EXAMPLE_PRIMARY_FILE_NAME} from '@taiga-ui/addon-doc';

import {TsFileComponentParser, TsFileModuleParser, TsFileParser} from './classes';

export function processTs(fileContent: string): string {
    const tsFileContent = new TsFileParser(fileContent);

    if (tsFileContent.hasNgComponent) {
        tsFileContent.addImport(`ChangeDetectionStrategy`, `@angular/core`);
    }

    return tsFileContent
        .toString()
        .replace(/import {encapsulation} from '.*';\n/gm, ``)
        .replace(/import {changeDetection} from '.*';\n/gm, ``)
        .replace(/\n +encapsulation,/gm, ``)
        .replace(
            /changeDetection,/gm,
            `changeDetection: ChangeDetectionStrategy.OnPush,`,
        );
}

export function processLess(fileContent: string): string {
    return fileContent.replace(
        `@import 'taiga-ui-local';`,
        `@import '@taiga-ui/core/styles/taiga-ui-local.less';`,
    );
}

export function isTS(fileName: string): boolean {
    return fileName === TUI_EXAMPLE_PRIMARY_FILE_NAME.TS || fileName.endsWith(`.ts`);
}

export function isLess(fileName: string): boolean {
    return (
        fileName === TUI_EXAMPLE_PRIMARY_FILE_NAME.LESS || `${fileName}`.endsWith(`.less`)
    );
}

export function isPrimaryComponentFile(fileName: string): boolean {
    return Object.values<string>(TUI_EXAMPLE_PRIMARY_FILE_NAME).includes(fileName);
}

export const prepareLess = (content: string): string =>
    content.replace(
        /@import.+taiga-ui-local(.less)?';/g,
        `@import '@taiga-ui/core/styles/taiga-ui-local.less';`,
    );

export const appPrefix = (stringsPart: TemplateStringsArray, path: string = ``): string =>
    `src/app/${stringsPart.join(``)}${path}`;

type FileName = string;

type FileContent = string;

export const getSupportFiles = <T extends Record<string, string>>(
    files: T,
): Array<[FileName, FileContent]> =>
    Object.entries(files).filter(
        ([fileName, content]) => content && !isPrimaryComponentFile(fileName),
    );

export const prepareSupportFiles = (
    files: Array<[FileName, FileContent]>,
): Project['files'] => {
    const processedContent: Project['files'] = {};

    for (const [fileName, fileContent] of files) {
        const prefixedFileName = appPrefix`${fileName}`;

        processedContent[prefixedFileName] = isLess(fileName)
            ? prepareLess(fileContent)
            : fileContent;
    }

    return processedContent;
};

export const getComponentsClassNames = (
    files: Array<[FileName, FileContent]>,
): Array<[FileName, FileContent]> =>
    files
        .filter(
            ([fileName, fileContent]) =>
                isTS(fileName) && new TsFileParser(fileContent).hasNgComponent,
        )
        .map(([fileName, fileContent]) => [
            fileName,
            new TsFileComponentParser(fileContent).className,
        ]);

export const getSupportModules = (
    files: Array<[FileName, FileContent]>,
): Array<[FileName, TsFileModuleParser]> =>
    files
        .filter(([name, content]) => isTS(name) && new TsFileParser(content).hasNgModule)
        .map(([fileName, fileContent]) => [
            fileName,
            new TsFileModuleParser(fileContent),
        ]);
