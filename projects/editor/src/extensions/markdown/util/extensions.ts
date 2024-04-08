import markdownExtensions from '../extensions/all';

export function tuiGetMarkdownSpec(extension: any): any {
    const markdownSpec = extension.storage?.markdown;
    const defaultMarkdownSpec = markdownExtensions.find(e => e.name === extension.name)
        ?.storage.markdown;

    if (markdownSpec || defaultMarkdownSpec) {
        return {
            ...defaultMarkdownSpec,
            ...markdownSpec,
        };
    }

    return null;
}
