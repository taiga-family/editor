export type TuiMutable<T> = {
    -readonly [P in keyof T]: T[P];
};
