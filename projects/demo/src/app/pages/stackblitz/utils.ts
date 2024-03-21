import type {Project} from '@stackblitz/sdk';
import {TUI_EXAMPLE_PRIMARY_FILE_NAME} from '@taiga-ui/addon-doc';

type FileName = string;

type FileContent = string;

export function isTS(fileName: string): boolean {
    return fileName === TUI_EXAMPLE_PRIMARY_FILE_NAME.TS || fileName.endsWith('.ts');
}

export function isLess(fileName: string): boolean {
    return (
        fileName === TUI_EXAMPLE_PRIMARY_FILE_NAME.LESS || `${fileName}`.endsWith('.less')
    );
}

export function isPrimaryComponentFile(fileName: string): boolean {
    return Object.values<string>(TUI_EXAMPLE_PRIMARY_FILE_NAME).includes(fileName);
}

export const prepareLess = (content: string): string =>
    content.replaceAll(
        /@import.+taiga-ui-local(.less)?';/g,
        "@import '@taiga-ui/core/styles/taiga-ui-local.less';",
    );

export const appPrefix = (stringsPart: TemplateStringsArray, path = ''): string =>
    `src/app/${stringsPart.join('')}${path}`;

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

    files.forEach(([fileName, fileContent]) => {
        const prefixedFileName = appPrefix`${fileName}`;

        processedContent[prefixedFileName] = isLess(fileName)
            ? prepareLess(fileContent)
            : fileContent;
    });

    return processedContent;
};
