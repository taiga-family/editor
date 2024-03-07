import type {TuiGradientDirection} from '../types/gradient-direction';

export interface TuiParsedGradient {
    readonly side: TuiGradientDirection;
    readonly stops: ReadonlyArray<{
        readonly color: string;
        readonly position: string;
    }>;
}
