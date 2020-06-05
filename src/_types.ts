export type Entries<T, U>     = Iterable<[T, U]>;
export type compareFn<T>      = (a: T, b: T) => number;
export type calledFn<T, U>    = (v: U, k: T, x: Entries<T, U>) => void;
export type testFn<T, U>      = (v: U, k: T, x: Entries<T, U>) => boolean;
export type mapFn<T, U, V>    = (v: U, k: T, x: Entries<T, U>) => U|V;
export type reduceFn<T, U, V> = (acc: V, v: U, k: T, x: Entries<T, U>) => V;
export type getFn<T>          = () => T;
