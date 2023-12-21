import {tuiParseColor} from '@taiga-ui/cdk';

import {TuiParsedGradient} from '../interfaces/parsed-gradient';

export function tuiToGradient({stops, side}: TuiParsedGradient): string {
    return `linear-gradient(${side}, ${stops
        .map(
            ({color, position}) => `rgba(${tuiParseColor(color).join(', ')}) ${position}`,
        )
        .join(', ')})`;
}
