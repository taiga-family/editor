import {tuiParseColor} from '@taiga-ui/cdk';
import type {TuiParsedGradient} from '@taiga-ui/editor/common';

export function tuiToGradient({stops, side}: TuiParsedGradient): string {
    return `linear-gradient(${side}, ${stops
        .map(
            ({color, position}) => `rgba(${tuiParseColor(color).join(', ')}) ${position}`,
        )
        .join(', ')})`;
}
