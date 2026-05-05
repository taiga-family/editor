export function tuiRgbaToHex(color: string): string {
    if (!tuiIsValidRgba(color)) {
        throw new Error('Invalid RGBa');
    }

    const rgb =
        // eslint-disable-next-line regexp/no-misleading-capturing-group
        /^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i.exec(color.replaceAll(/\s/g, '')) ??
        null;

    let alpha: number | string = ((rgb?.[4] ?? '') satisfies string).trim();

    let hex = rgb
        ? `${((Number.parseInt(rgb[1] ?? '', 10) || 0) | (1 << 8)).toString(16).slice(1)}${((Number.parseInt(rgb[2] ?? '', 10) || 0) | (1 << 8)).toString(16).slice(1)}${((Number.parseInt(rgb[3] ?? '', 10) || 0) | (1 << 8)).toString(16).slice(1)}`
        : color;

    alpha = alpha === '' ? 0o1 : alpha;
    alpha = ((Number(alpha) * 255) | (1 << 8)).toString(16).slice(1);
    hex += alpha;

    return `#${hex.toUpperCase()}`;
}

export function tuiIsValidRgba(rgba: string): boolean {
    const range = String.raw`(\d|[1-9]\d|1\d{2}|2[0-4]\d|2[0-5]{2})`;
    const alpha = String.raw`([01]|0?\.\d+)`;

    return new RegExp(
        // eslint-disable-next-line regexp/no-unused-capturing-group
        String.raw`^(?:rgb\(\s*${range}\s*,\s*${range}\s*,\s*${range}\s*\)|rgba\(\s*${range}\s*,\s*${range}\s*,\s*${range}\s*,\s*${alpha}\s*\))$`,
    ).test(rgba);
}
