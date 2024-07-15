import {tuiIsValidUrl} from '@taiga-ui/cdk';
import {
    TUI_EDITOR_LINK_HASH_PREFIX as HASH_PREFIX,
    TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER as OSI_PROTOCOL_DIVIDER,
    TUI_EDITOR_LINK_SIMPLE_PROTOCOL_DIVIDER as SIMPLE_PROTOCOL_DIVIDER,
} from '@tinkoff/tui-editor/constants';

interface TuiEditLinkParsed {
    path: string;
    prefix: string;
}

function splitOsiProtocol(url: string = ``): Array<string | undefined> {
    const protocolPosition = url.indexOf(OSI_PROTOCOL_DIVIDER) ?? -1;
    const [prefix, path] =
        protocolPosition > -1
            ? [
                  url.slice(0, protocolPosition + OSI_PROTOCOL_DIVIDER.length),
                  url.slice(protocolPosition + OSI_PROTOCOL_DIVIDER.length, url.length),
              ]
            : [``, url];
    const result = [prefix, path].filter(Boolean);

    return path?.includes(`://`) && result.length > 1 ? splitOsiProtocol(path) : result;
}

function splitSimpleProtocol(url: string = ``): Array<string | undefined> {
    const [prefix, path] = url.split(/:/).slice(-2).filter(Boolean);
    const hardUrl = // https://domain.com/path:some:schema:data:test
        (url.includes('/') && url.lastIndexOf(':') > url.indexOf('/')) ||
        (url.includes('?') && url.lastIndexOf(':') > url.indexOf('?'));

    return !hardUrl && prefix && path && !tuiIsValidUrl(url) ? [`${prefix}:`, path] : [];
}

export function tuiEditLinkParseUrl(url: string = ``): TuiEditLinkParsed {
    if (url.startsWith(HASH_PREFIX)) {
        return {prefix: HASH_PREFIX, path: url.slice(1)};
    }

    const [prefix = ``, path = ``] = url.includes(OSI_PROTOCOL_DIVIDER)
        ? splitOsiProtocol(url)
        : splitSimpleProtocol(url);

    if (path.includes(SIMPLE_PROTOCOL_DIVIDER)) {
        const [protocol, otherPart] = splitSimpleProtocol(path);

        if (protocol && otherPart) {
            return {prefix: protocol, path: otherPart};
        }
    }

    if (url.startsWith(`/`) && !url.startsWith(`//`)) {
        return {prefix: url.slice(0, 1), path: url.slice(1)};
    }

    if (url.startsWith(`./`)) {
        return {prefix: url.slice(0, 2), path: url.slice(2)};
    }

    return {prefix, path: prefix === `` ? url : path};
}
