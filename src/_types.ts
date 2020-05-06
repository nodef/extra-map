export type compareFn<V>   = (a: V, b: V) => number;
export type calledFn<K, V> = (v: V, k: K, x: Iterable<[K, V]>) => void;
export type testFn<K, V>   = (v: V, k: K, x: Iterable<[K, V]>) => boolean;
export type mapFn<K, V, W> = (v: V, k: K, x: Iterable<[K, V]>) => V|W;
export type reduceFn<K, V, W> = (acc: W, v: V, k: K, x: Iterable<[K, V]>) => W;
export type getFn<V>       = () => V;
