import {TuiGradientDirection} from '@tinkoff/tui-editor/types';

export interface TuiParsedGradient {
    readonly side: TuiGradientDirection;
    readonly stops: ReadonlyArray<{
        readonly color: string;
        readonly position: string;
    }>;
}
