import markdownIt from 'markdown-it';
import type StateInline from 'markdown-it/lib/rules_inline/state_inline';

const md = markdownIt();

function scanDelims(text: string, pos: number): StateInline.Scanned {
    // @ts-ignore
    md.inline.State.prototype.scanDelims.call({src: text, posMax: text.length});
    // @ts-ignore
    const state = new md.inline.State(text, null, null, []);

    return state.scanDelims(pos, true);
}

function trimStart(text: string, delim: string, from: number, to: number): any {
    let pos = from;
    let res = text;

    while (pos < to) {
        if (scanDelims(res, pos).can_open) {
            break;
        }

        res = tuiShiftDelim(res, delim, pos, 1);
        pos++;
    }

    return {text: res, from: pos, to};
}

function trimEnd(text: string, delim: string, from: number, to: number): any {
    let pos = to;
    let res = text;

    while (pos > from) {
        if (scanDelims(res, pos).can_close) {
            break;
        }

        res = tuiShiftDelim(res, delim, pos, -1);
        pos--;
    }

    return {text: res, from, to: pos};
}

export function tuiTrimInline(
    text: string,
    delim: string,
    from: number,
    to: number,
): string {
    let state = {
        text,
        from,
        to,
    };

    state = trimStart(state.text, delim, state.from, state.to);
    state = trimEnd(state.text, delim, state.from, state.to);

    if (state.to - state.from < delim.length + 1) {
        state.text =
            state.text.slice(0, Math.max(0, state.from)) +
            state.text.slice(Math.max(0, state.to + delim.length));
    }

    return state.text;
}

export function tuiShiftDelim(
    text: string,
    delim: string,
    start: number,
    offset: number,
): string {
    let res =
        text.slice(0, Math.max(0, start)) + text.slice(Math.max(0, start + delim.length));

    res =
        res.slice(0, Math.max(0, start + offset)) +
        delim +
        res.slice(Math.max(0, start + offset));

    return res;
}
