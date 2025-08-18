import markdownIt, {type StateInline} from 'markdown-it';

const md = markdownIt();

interface TrimOptions {
    text: string;
    delim: string;
    from: number;
    to: number;
}

function scanDelims(text: string, pos: number): StateInline.Scanned {
    // @ts-ignore
    md.inline.State.prototype.scanDelims.call({src: text, posMax: text.length});
    // @ts-ignore
    const state = new md.inline.State(text, null, null, []);

    return state.scanDelims(pos, true);
}

function trimStart(options: TrimOptions): any {
    const {text, delim, from, to} = options;
    let pos = from;
    let res = text;

    while (pos < to) {
        if (scanDelims(res, pos).can_open) {
            break;
        }

        res = tuiShiftDelim({text: res, delim, start: pos, offset: 1});
        pos++;
    }

    return {text: res, from: pos, to};
}

function trimEnd(options: TrimOptions): any {
    const {text, delim, from, to} = options;

    let pos = to;
    let res = text;

    while (pos > from) {
        if (scanDelims(res, pos).can_close) {
            break;
        }

        res = tuiShiftDelim({text: res, delim, start: pos, offset: -1});
        pos--;
    }

    return {text: res, from, to: pos};
}

export function tuiTrimInline(options: TrimOptions): string {
    const {text, delim, from, to} = options;
    let state = {
        text,
        from,
        to,
    };

    state = trimStart({text: state.text, delim, from: state.from, to: state.to});
    state = trimEnd({text: state.text, delim, from: state.from, to: state.to});

    if (state.to - state.from < delim.length + 1) {
        state.text =
            state.text.slice(0, Math.max(0, state.from)) +
            state.text.slice(Math.max(0, state.to + delim.length));
    }

    return state.text;
}

interface Options {
    text: string;
    delim: string;
    start: number;
    offset: number;
}

export function tuiShiftDelim(options: Options): string {
    const {text, delim, start, offset} = options;
    let res =
        text.slice(0, Math.max(0, start)) + text.slice(Math.max(0, start + delim.length));

    res =
        res.slice(0, Math.max(0, start + offset)) +
        delim +
        res.slice(Math.max(0, start + offset));

    return res;
}
