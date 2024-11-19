import {
    TUI_EDITOR_LINK_HASH_PREFIX,
    TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER,
    TUI_EDITOR_LINK_SIMPLE_PROTOCOL_DIVIDER,
} from '@taiga-ui/editor/common';

interface TuiEditLinkParsed {
    path: string;
    prefix: string;
}

function splitOsiProtocol(rawUrl = ''): Array<string | undefined> {
    const [url = '', queryParams = ''] = rawUrl.split(/\?/) ?? [];
    const protocolPosition = url.indexOf(TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER) ?? -1;
    const [prefix, path] =
        protocolPosition > -1
            ? [
                  url.slice(
                      0,
                      protocolPosition + TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER.length,
                  ),
                  url.slice(
                      protocolPosition + TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER.length,
                      url.length,
                  ),
              ]
            : ['', url];

    const pathWithQueries = path + (queryParams.length ? `?${queryParams}` : '');
    const result = [prefix, pathWithQueries].filter(Boolean);

    return path?.includes('://') && result.length > 1
        ? splitOsiProtocol(pathWithQueries)
        : result;
}

function splitSimpleProtocol(rawUrl = ''): Array<string | undefined> {
    const [url = '', queryParams = ''] = rawUrl.split(/\?/) ?? [];
    const [prefix, path] = url.split(/:/).slice(-2).filter(Boolean);
    const hardUrl = // https://domain.com/path:some:schema:data:test
        (url.includes('/') && url.lastIndexOf(':') > url.indexOf('/')) ||
        (url.includes('?') && url.lastIndexOf(':') > url.indexOf('?'));

    return !hardUrl && prefix && path && !isValidUrl(url)
        ? [`${prefix}:`, path + (queryParams.length ? `?${queryParams}` : '')]
        : [];
}

export function tuiEditLinkParseUrl(url = ''): TuiEditLinkParsed {
    if (url.startsWith(TUI_EDITOR_LINK_HASH_PREFIX)) {
        return {prefix: TUI_EDITOR_LINK_HASH_PREFIX, path: url.slice(1)};
    }

    const [prefix = '', path = ''] = url.includes(TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER)
        ? splitOsiProtocol(url)
        : splitSimpleProtocol(url);

    if (path.includes(TUI_EDITOR_LINK_SIMPLE_PROTOCOL_DIVIDER)) {
        const [protocol, otherPart] = splitSimpleProtocol(path);

        if (protocol && otherPart) {
            return {prefix: protocol, path: otherPart};
        }
    }

    if (url.startsWith('/') && !url.startsWith('//')) {
        return {prefix: url.slice(0, 1), path: url.slice(1)};
    }

    if (url.startsWith('./')) {
        return {prefix: url.slice(0, 2), path: url.slice(2)};
    }

    return {prefix, path: prefix === '' ? url : path};
}

/**
 * @internal
 */
function isValidUrl(url: string): boolean {
    return new RegExp(
        String.raw`^([a-zA-Z]+:\/\/)?` + // protocol
            String.raw`((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|localhost|` + // domain name
            String.raw`((\d{1,3}\.){3}\d{1,3}))` + // OR IP (v4) address
            String.raw`(\:\d+)?(\/[-a-z\d%_.~+\:]*)*` + // port and path
            String.raw`(\?[)(;&a-z\d%_.~+=-]*)?` + // query string
            String.raw`(\#[-a-z\d_]*)?$`, // fragment locator
        'i',
    ).test(url);
}
