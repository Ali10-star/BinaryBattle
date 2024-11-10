export type Maybe<T> = T | undefined | null;

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type Booleanish = boolean | 'true' | 'false' | '0' | '1' | 0 | 1;

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
