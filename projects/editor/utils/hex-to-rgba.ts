const getChunksFromString = (hex: string, chunkSize: number): RegExpMatchArray | null =>
    hex.match(new RegExp(`.{${chunkSize}}`, 'g'));

const convertHexUnitTo256 = (hexStr: string): number =>
    Number.parseInt(hexStr.repeat(2 / hexStr.length), 16);

const getAlphaFloat = (a?: number, alpha?: number): number => {
    if (a !== undefined) {
        return Number((a / 255).toFixed(2));
    }

    return typeof alpha !== 'number' || alpha < 0 || alpha > 1 ? 1 : alpha;
};

export function tuiHexToRGBA(hex: string, alpha?: number): string {
    const [r, g, b, a] = tuiParseHex(hex, alpha);

    return a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
}

export function tuiIsValidHex(hex: string): boolean {
    return /^#(?:[A-F0-9]{3,4}){1,2}$/i.test(hex);
}

export function tuiParseHex(
    hex: string,
    alpha?: number,
): [number, number, number, number] {
    if (!tuiIsValidHex(hex)) {
        throw new Error('Invalid HEX');
    }

    const chunkSize = Math.floor((hex.length - 1) / 3);
    const hexArr = getChunksFromString(hex.slice(1), chunkSize);

    const [r = Number.NaN, g = Number.NaN, b = Number.NaN, a] =
        hexArr?.map(convertHexUnitTo256) ?? [];

    const floatAlpha = getAlphaFloat(a, alpha);

    return [r, g, b, floatAlpha];
}
