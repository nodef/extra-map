import {
  IDENTITY,
  COMPARE,
} from "@nodef/extra-function";
import type {
  MapFunction as IterableMapFunction,
} from "@nodef/extra-iterable";
import {
  last         as arrayLast,
  some         as arraySome,
  subsequences as arraySubsequences,
  randomValue  as arrayRandomValue,
  randomSubsequence as arrayRandomSubsequence,
} from "@nodef/extra-array";




// TYPES
// =====

/** Entries is a list of key-value pairs, with unique keys. */
export type Entries<K, V> = Iterable<[K, V]>;


/** Lists is a pair of key list and value list, with unique keys. */
export type Lists<K, V> = [Iterable<K>, Iterable<V>];


/**
 * Handle reading of a single value.
 * @returns value
 */
export type ReadFunction<V> = () => V;


/**
 * Handle combining of two values.
 * @param a a value
 * @param b another value
 * @returns combined value
 */
export type CombineFunction<V> = (a: V, b: V) => V;


/**
 * Handle comparison of two values.
 * @param a a value
 * @param b another value
 * @returns a<b: -ve, a=b: 0, a>b: +ve
 */
export type CompareFunction<V> = (a: V, b: V) => number;


/**
 * Handle processing of values in a map.
 * @param v value in map
 * @param k key of value in map
 * @param x map containing the value
 */
export type ProcessFunction<K, V> = (v: V, k: K, x: Map<K, V>) => void;


/**
 * Handle selection of values in a map.
 * @param v value in map
 * @param k key of value in map
 * @param x map containing the value
 * @returns selected?
 */
export type TestFunction<K, V> = (v: V, k: K, x: Map<K, V>) => boolean;


/**
 * Handle transformation of a value to another.
 * @param v value in map
 * @param k key of value in map
 * @param x map containing the value
 * @returns transformed value
 */
export type MapFunction<K, V, W> = (v: V, k: K, x: Map<K, V> | null) => W;


/**
 * Handle reduction of multiple values into a single value.
 * @param acc accumulator (temporary result)
 * @param v value in map
 * @param k key of value in map
 * @param x map containing the value
 * @returns reduced value
 */
export type ReduceFunction<K, V, W> = (acc: W, v: V, k: K, x: Map<K, V>) => W;


/**
 * Handle ending of a combined map.
 * @param dones iᵗʰ map done?
 * @returns combined map done?
 */
export type EndFunction = (dones: boolean[]) => boolean;




// METHODS
// =======

// ABOUT
// -----

/**
 * Check if value is a map.
 * @param v value
 * @returns v is a map?
 */
export function is(v: unknown): v is Map<unknown, unknown> {
  return v instanceof Map;
}


/**
 * List all keys.
 * @param x a map
 * @returns k₀, k₁, ... | [kᵢ, vᵢ] ∈ x
 */
export function keys<K, V>(x: Map<K, V>): IterableIterator<K> {
  return x.keys();
}


/**
 * List all values.
 * @param x a map
 * @returns v₀, v₁, ... | [kᵢ, vᵢ] ∈ x
 */
export function values<K, V>(x: Map<K, V>): IterableIterator<V> {
  return x.values();
}


/**
 * List all key-value pairs.
 * @param x a map
 * @returns [k₀, v₀], [k₁, v₁], ... | [kᵢ, vᵢ] ∈ x
 */
export function entries<K, V>(x: Map<K, V>): IterableIterator<[K, V]> {
  return x.entries();
}




// GENERATE
// --------

/**
 * Convert entries to map.
 * @param x entries
 * @returns x as map
 */
export function from<K, V>(x: Entries<K, V>): Map<K, V> {
  return new Map(x);
}
export {from as fromEntries};


/**
 * Convert entries to map.
 * @param x entries (updateable is map!)
 * @returns x as map
 */
export function from$<K, V>(x: Entries<K, V>): Map<K, V> {
  return x instanceof Map? x : new Map(x);
}
export {from$ as fromEntries$};


/**
 * Convert lists to map.
 * @param x lists, i.e. [keys, values]
 * @returns x as map
 */
export function fromLists<K, V>(x: Lists<K, V>): Map<K, V> {
  const [ks, vs] = x;
  const iv = vs[Symbol.iterator]();
  const a  = new Map<K, V>();
  for (const k of ks)
    a.set(k, iv.next().value);
  return a;
}


/**
 * Create a map from keys.
 * @param x keys
 * @param fm map function for values (v, i, x)
 * @returns x as map
 */
export function fromKeys<K, V=K>(x: Iterable<K>, fm: IterableMapFunction<K, K|V> | null=null): Map<K, K|V> {
  fm = fm || IDENTITY;
  const a = new Map<K, K|V>(); let i = -1;
  for (const k of x)
    a.set(k, fm(k, ++i, x));
  return a;
}


/**
 * Create a map from values.
 * @param x values
 * @param fm map function for keys (v, i, x)
 * @returns x as map
 */
export function fromValues<V, K=V>(x: Iterable<V>, fm: IterableMapFunction<V, V|K> | null=null): Map<V|K, V> {
  fm = fm || IDENTITY;
  const a = new Map<V|K, V>(); let i = -1;
  for (const v of x)
    a.set(fm(v, ++i, x), v);
  return a;
}




// COMPARE
// -------

/**
 * Compare two maps.
 * @param x a map
 * @param y another map
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns x=y: 0, otherwise: -ve/+ve
 */
export function compare<K, V, W=V>(x: Map<K, V>, y: Map<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): number {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  const ks = unionKeys(x, y);
  for (const k of ks) {
    if (!x.has(k)) return -1;
    if (!y.has(k)) return  1;
    const vx = fm(x.get(k) as V, k, x);
    const vy = fm(y.get(k) as V, k, y);
    const c  = fc(vx, vy);
    if (c!==0) return c;
  }
  return 0;
}


/**
 * Check if two maps are equal.
 * @param x a map
 * @param y another map
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns x = y?
 */
export function isEqual<K, V, W=V>(x: Map<K, V>, y: Map<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): boolean {
  return x.size===y.size && compare(x, y, fc, fm)===0;
}




// SIZE
// ----

/**
 * Find the size of a map.
 * @param x a map
 * @returns |x|
 */
export function size<K, V>(x: Map<K, V>): number {
  return x.size;
}
export {size as length};


/**
 * Check if a map is empty.
 * @param x a map
 * @returns |x| = 0?
 */
export function isEmpty<K, V>(x: Map<K, V>): boolean {
  return x.size===0;
}




// GET/SET
// -------

/**
 * Get value at key.
 * @param x a map
 * @param k key
 * @returns x[k]
 */
export function get<K, V>(x: Map<K, V>, k: K): V | undefined {
  return x.get(k);
}


/**
 * Get values at keys.
 * @param x a map
 * @param ks keys
 * @returns [x[k₀], x[k₁], ...] | [k₀, k₁, ...] = ks
 */
export function getAll<K, V>(x: Map<K, V>, ks: K[]): (V | undefined)[] {
  return ks.map(k => x.get(k));
}


/**
 * Get value at path in a nested map.
 * @param x a nested map
 * @param p path
 * @returns x[k₀][k₁][...] | [k₀, k₁, ...] = p
 */
export function getPath<K>(x: Map<K, unknown>, p: K[]): unknown {
  let xany: unknown = x;
  for (const k of p)
    xany = is(xany)? xany.get(k) : undefined;
  return xany;
}


/**
 * Check if nested map has a path.
 * @param x a nested map
 * @param p path
 * @returns x[k₀][k₁][...] exists? | [k₀, k₁, ...] = p
 */
export function hasPath<K>(x: Map<K, unknown>, p: K[]): boolean {
  let xany: unknown = x;
  for (const k of p) {
    if (!is(xany)) return false;
    xany = xany.get(k);
  }
  return true;
}


/**
 * Set value at key.
 * @param x a map
 * @param k key
 * @param v value
 * @returns x' | x' = x; x'[k] = v
 */
export function set<K, V>(x: Entries<K, V>, k: K, v: V): Map<K, V> {
  return new Map(x).set(k, v);
}


/**
 * Set value at key.
 * @param x a map (updated)
 * @param k key
 * @param v value
 * @returns x | x[k] = v
 */
export function set$<K, V>(x: Map<K, V>, k: K, v: V): Map<K, V> {
  return x.set(k, v);
}


/**
 * Set value at path in a nested map.
 * @param x a nested map (updated)
 * @param p path
 * @param v value
 * @returns x | x[k₀][k₁][...] = v; [k₀, k₁, ...] = p
 */
export function setPath$<K>(x: Map<K, unknown>, p: K[], v: unknown): Map<K, unknown> {
  const y = getPath(x, p.slice(0, -1));
  if (is(y)) y.set(arrayLast(p), v);
  return x;
}


/**
 * Exchange two values.
 * @param x a map
 * @param k a key
 * @param l another key
 * @returns x' | x' = x; x'[k] = x[l]; x'[l] = x[k]
 */
export function swap<K, V>(x: Entries<K, V>, k: K, l: K): Map<K, V> {
  return swap$(new Map(x), k, l);
}


/**
 * Exchange two values.
 * @param x a map (updated)
 * @param k a key
 * @param l another key
 * @returns x | x[i] ↔ x[j]
 */
export function swap$<K, V>(x: Map<K, V>, k: K, l: K): Map<K, V> {
  const t  = x.get(k);
  x.set(k, x.get(l) as V);
  x.set(l, t as V);
  return x;
}


/**
 * Remove value at key.
 * @param x a map
 * @param k key
 * @returns x \\: [k]
 */
export function remove<K, V>(x: Entries<K, V>, k: K): Map<K, V> {
  return remove$(new Map(x), k);
}


/**
 * Remove value at key.
 * @param x a map (updated)
 * @param k key
 * @returns x = x \\: [k]
 */
export function remove$<K, V>(x: Map<K, V>, k: K): Map<K, V> {
  x.delete(k);
  return x;
}


/**
 * Remove value at path in a nested map.
 * @param x a nested map (updated)
 * @param p path
 * @returns x = x \\: [k₀][k₁][...] | [k₀, k₁, ...] = p
 */
export function removePath$<K>(x: Map<K, unknown>, p: K[]): Map<K, unknown> {
  const y = getPath(x, p.slice(0, -1));
  if (is(y)) y.delete(arrayLast(p));
  return x;
}




// PROPERTY
// --------

/**
 * Count values which satisfy a test.
 * @param x a map
 * @param ft test function (v, k, x)
 * @returns Σtᵢ | tᵢ = 1 if ft(vᵢ) else 0; [kᵢ, vᵢ] ∈ x
 */
export function count<K, V>(x: Map<K, V>, ft: TestFunction<K, V>): number {
  let a = 0;
  for (const [k, v] of x)
    if (ft(v, k, x)) ++a;
  return a;
}


/**
 * Count occurrences of values.
 * @param x a map
 * @param fm map function (v, k, x)
 * @returns Map \{value ⇒ count\}
 */
export function countAs<K, V, W=V>(x: Map<K, V>, fm: MapFunction<K, V, V|W> | null=null): Map<V|W, number> {
  fm = fm || IDENTITY;
  const a  = new Map();
  for (const [k, v] of x) {
    const w = fm(v, k, x);
    const n = a.get(w) || 0;
    a.set(w, n+1);
  }
  return a;
}


/**
 * Find smallest value.
 * @param x a map
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns v | v ≤ vᵢ; [kᵢ, vᵢ] ∈ x
 */
export function min<K, V, W=V>(x: Map<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): V {
  return rangeEntries(x, fc, fm)[0][1];
}


/**
 * Find smallest entry.
 * @param x a map
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [min_key, min_value]
 */
export function minEntry<K, V, W=V>(x: Map<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): [K, V] {
  return rangeEntries(x, fc, fm)[0];
}


/**
 * Find largest value.
 * @param x a map
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns v | v ≥ vᵢ; [kᵢ, vᵢ] ∈ x
 */
export function max<K, V, W=V>(x: Map<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): V {
  return rangeEntries(x, fc, fm)[1][1];
}


/**
 * Find largest entry.
 * @param x a map
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [max_key, max_value]
 */
export function maxEntry<K, V, W=V>(x: Map<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): [K, V] {
  return rangeEntries(x, fc, fm)[1];
}


/**
 * Find smallest and largest values.
 * @param x a map
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [min_value, max_value]
 */
export function range<K, V, W=V>(x: Map<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): [V, V] {
  const [a, b] = rangeEntries(x, fc, fm);
  return [a[1], b[1]];
}


/**
 * Find smallest and largest entries.
 * @param x a map
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [min_entry, max_entry]
 */
export function rangeEntries<K, V, W=V>(x: Map<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): [[K, V], [K, V]] {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  let mk: K | undefined, mu: V | undefined, mv: V|W | undefined;
  let nk: K | undefined, nu: V | undefined, nv: V|W | undefined;
  let i = 0;
  for (const [k, u] of x) {
    const v = fm(u, k, x);
    if (i===0 || fc(v, mv as V|W)<0) { mk = k; mu = u; mv = v; }
    if (i===0 || fc(v, nv as V|W)>0) { nk = k; nu = u; nv = v; }
    ++i;
  }
  return [[mk as K, mu as V], [nk as K, nu as V]];
}




// PART
// ----

/**
 * Get first entry from map (default order).
 * @param x a map
 * @param ed default entry
 * @returns [k₀, v₀] if x ≠ Φ else ed | [k₀, v₀] ∈ x
 */
export function head<K, V>(x: Entries<K, V>, ed: [K | undefined, V | undefined]=[undefined, undefined]): [K | undefined, V | undefined] {
  for (const e of x)
    return e;
  return ed;
}


/**
 * Get a map without its first entry (default order).
 * @param x a map
 * @returns x \\ \{[k₀, v₀]\} if x ≠ Φ else x | [k₀, v₀] ∈ x
 */
export function tail<K, V>(x: Map<K, V>): Map<K, V> {
  return drop(x, 1);
}


/**
 * Keep first n entries only (default order).
 * @param x a map
 * @param n number of entries [1]
 * @returns \{[k₀, v₀], [k₁, v₁], ...\} | [kᵢ, vᵢ] ∈ x and |\{[k₀, v₀], [k₁, v₁], ...\}| ≤ n
 */
export function take<K, V>(x: Map<K, V>, n: number=1): Map<K, V> {
  const a = new Map(); let i = -1;
  for (const [k, v] of x) {
    if (++i>=n) break;
    a.set(k, v);
  }
  return a;
}


/**
 * Keep first n entries only (default order).
 * @param x a map (updated)
 * @param n number of entries [1]
 * @returns x = \{[k₀, v₀], [k₁, v₁], ...\} | [kᵢ, vᵢ] ∈ x and |\{[k₀, v₀], [k₁, v₁], ...\}| ≤ n
 */
export function take$<K, V>(x: Map<K, V>, n: number=1): Map<K, V> {
  let i = -1;
  for (const k of x.keys())
    if (++i>=n) x.delete(k);
  return x;
}


/**
 * Remove first n entries (default order).
 * @param x a map
 * @param n number of entries [1]
 * @returns \{[kₙ, vₙ], [kₙ₊₁, vₙ₊₁], ...\} | [kᵢ, vᵢ] ∈ x and |\{[kₙ, vₙ], [kₙ₊₁, vₙ₊₁], ...\}| ≤ max(|x| - n, 0)
 */
export function drop<K, V>(x: Map<K, V>, n: number=1): Map<K, V> {
  const a = new Map(); let i = -1;
  for (const [k, v] of x)
    if (++i>=n) a.set(k, v);
  return a;
}


/**
 * Remove first n entries (default order).
 * @param x a map (updated)
 * @param n number of entries [1]
 * @returns x = \{[kₙ, vₙ], [kₙ₊₁, vₙ₊₁], ...\} | [kᵢ, vᵢ] ∈ x and |\{[kₙ, vₙ], [kₙ₊₁, vₙ₊₁], ...\}| ≤ max(|x| - n, 0)
 */
export function drop$<K, V>(x: Map<K, V>, n: number=1): Map<K, V> {
  let i = -1;
  for (const k of x.keys()) {
    if (++i>=n) break;
    x.delete(k);
  }
  return x;
}




// ARRANGEMENTS
// ------------

/**
 * List all possible subsets.
 * @param x a map
 * @param n number of entries [-1 ⇒ any]
 * @returns entries selected by bit from 0..2^|x| if n<0; only of length n otherwise
 */
export function* subsets<K, V>(x: Map<K, V>, n: number=-1): IterableIterator<Map<K, V>> {
  for (const ks of arraySubsequences([...x.keys()], n))
    yield filterAt(x, ks);
}


/**
 * Pick an arbitrary key.
 * @param x a map
 * @param fr random number generator ([0, 1))
 * @returns kᵢ | [kᵢ, vᵢ] ∈ x
 */
export function randomKey<K, V>(x: Map<K, V>, fr: ReadFunction<number>=Math.random): K {
  return arrayRandomValue([...x.keys()], fr);
}
export {randomKey as key};


/**
 * Pick an arbitrary entry.
 * @param x a map
 * @param fr random number generator ([0, 1))
 * @returns [kᵢ, vᵢ] | [kᵢ, vᵢ] ∈ x
 */
export function randomEntry<K, V>(x: Entries<K, V>, fr: ReadFunction<number>=Math.random): [K, V] {
  return arrayRandomValue([...x], fr);
}
export {randomEntry as entry};


/**
 * Pick an arbitrary subset.
 * @param x a map
 * @param n number of entries [-1 ⇒ any]
 * @param fr random number generator ([0, 1))
 * @returns \{[kᵢ, vᵢ], [kⱼ, vⱼ], ...\} | [kᵢ, vᵢ], [kⱼ, vⱼ], ... ∈ x; |\{[kᵢ, vᵢ], [kⱼ, vⱼ], ...\}| = |x| if n<0 else n
 */
export function randomSubset<K, V>(x: Map<K, V>, n: number=-1, fr: ReadFunction<number> | null=Math.random): Map<K, V> {
  const ks = arrayRandomSubsequence([...x.keys()], n, fr);
  return filterAt(x, ks as K[]);
}
export {randomSubset as subset};




// FIND
// ----

/**
 * Check if map has a key.
 * @param x a map
 * @param k search key
 * @returns [k, *] ∈ x?
 */
export function has<K, V>(x: Map<K, V>, k: K): boolean {
  return x.has(k);
}
export {has as hasKey};


/**
 * Check if map has a value.
 * @param x a map
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [*, v] ∈ x?
 */
export function hasValue<K, V, W=V>(x: Map<K, V>, v: V, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): boolean {
  return searchValue(x, v, fc, fm)!==undefined;
}


/**
 * Check if map has an entry.
 * @param x a map
 * @param e search entry ([k, v])
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [k, v] ∈ x? | [k, v] = e
 */
export function hasEntry<K, V, W=V>(x: Map<K, V>, e: [K, V], fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): boolean {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  const [k, v] = e;
  return x.has(k) && fc(fm(x.get(k) as V, k, x), v)===0;
}


/**
 * Check if map has a subset.
 * @param x a map
 * @param y search subset
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns y ⊆ x?
 */
export function hasSubset<K, V, W=V>(x: Map<K, V>, y: Map<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): boolean {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  for (const [k, v] of y) {
    if (!x.has(k)) return false;
    const wx = fm(x.get(k) as V, k, x);
    const wy = fm(v, k, y);
    if (fc(wx, wy)!==0) return false;
  }
  return true;
}


/**
 * Find first value passing a test (default order).
 * @param x a map
 * @param ft test function (v, k, x)
 * @returns first v | ft(v) = true; [k, v] ∈ x
 */
export function find<K, V>(x: Map<K, V>, ft: TestFunction<K, V>): V | undefined {
  for (const [k, v] of x)
    if (ft(v, k, x)) return v;
}


/**
 * Find values passing a test.
 * @param x a map
 * @param ft test function (v, k, x)
 * @returns [v₀, v₁, ...] | ft(vᵢ) = true; [kᵢ, vᵢ] ∈ x
 */
export function findAll<K, V>(x: Map<K, V>, ft: TestFunction<K, V>): V[] {
  const a = [];
  for (const [k, v] of x)
    if (ft(v, k, x)) a.push(v);
  return a;
}


/**
 * Find key of an entry passing a test.
 * @param x a map
 * @param ft test function (v, k, x)
 * @returns key of entry
 */
export function search<K, V>(x: Map<K, V>, ft: TestFunction<K, V>): K | undefined {
  for (const [k, v] of x)
    if (ft(v, k, x)) return k;
}


/**
 * Find keys of entries passing a test.
 * @param x a map
 * @param ft test function (v, k, x)
 * @returns keys of entries
 */
export function searchAll<K, V>(x: Map<K, V>, ft: TestFunction<K, V>): K[] {
  const a = [];
  for (const [k, v] of x)
    if (ft(v, k, x)) a.push(k);
  return a;
}


/**
 * Find a key with given value.
 * @param x a map
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns key of value
 */
export function searchValue<K, V, W=V>(x: Map<K, V>, v: V, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): K | undefined {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  const w = fm(v, null as K, null);
  for (const [k, u] of x) {
    const wx = fm(u, k, x);
    if (fc(wx, w)===0) return k;
  }
}


/**
 * Find keys with given value.
 * @param x a map
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns keys of value
 */
export function searchValueAll<K, V, W=V>(x: Map<K, V>, v: V, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): K[] {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  const w  = fm(v, null as K, null), a = [];
  for(const [k, u] of x) {
    const wx = fm(u, k, x);
    if (fc(wx, w)===0) a.push(k);
  }
  return a;
}




// FUNCTIONAL
// ----------

/**
 * Call a function for each value.
 * @param x a map
 * @param fp process function (v, k, x)
 */
export function forEach<K, V>(x: Map<K, V>, fp: ProcessFunction<K, V>): void {
  for (const [k, v] of x)
    fp(v, k, x);
}


/**
 * Check if any value satisfies a test.
 * @param x a map
 * @param ft test function (v, k, x)
 * @returns true if ft(vᵢ) = true for some [kᵢ, vᵢ] ∈ x
 */
export function some<K, V>(x: Map<K, V>, ft: TestFunction<K, V>): boolean {
  for (const [k, v] of x)
    if (ft(v, k, x)) return true;
  return false;
}


/**
 * Check if all values satisfy a test.
 * @param x a map
 * @param ft test function (v, k, x)
 * @returns true if ft(vᵢ) = true for all [kᵢ, vᵢ] ∈ x
 */
export function every<K, V>(x: Map<K, V>, ft: TestFunction<K, V>): boolean {
  for (const [k, v] of x)
    if (!ft(v, k, x)) return false;
  return true;
}


/**
 * Transform values of a map.
 * @param x a map
 * @param fm map function (v, k, x)
 * @returns \{[k₀, fm(v₀)], [k₁, fm(v₁)], ...\} | [kᵢ, vᵢ] ∈ x
 */
export function map<K, V, W=V>(x: Map<K, V>, fm: MapFunction<K, V, V|W>): Map<K, V|W> {
  const a = new Map();
  for (const [k, v] of x)
    a.set(k, fm(v, k, x));
  return a;
}


/**
 * Transform values of a map.
 * @param x a map (updated)
 * @param fm map function (v, k, x)
 * @returns x = \{[k₀, fm(v₀)], [k₁, fm(v₁)], ...\} | [kᵢ, vᵢ] ∈ x
 */
export function map$<K, V>(x: Map<K, V>, fm: MapFunction<K, V, V>): Map<K, V> {
  for (const [k, v] of x)
    x.set(k, fm(v, k, x));
  return x;
}


/**
 * Reduce values of set to a single value.
 * @param x a map
 * @param fr reduce function (acc, v, k, x)
 * @param acc initial value
 * @returns fr(fr(acc, v₀), v₁)... | fr(acc, v₀) = v₀ if acc not given
 */
export function reduce<K, V, W=V>(x: Map<K, V>, fr: ReduceFunction<K, V, V|W>, acc?: V|W): V|W {
  let init = arguments.length <= 2;
  for (const [k, v] of x) {
    if (init) { acc = v; init = false; }
    else acc = fr(acc as V|W, v, k, x);
  }
  return acc as V|W;
}


/**
 * Keep entries which pass a test.
 * @param x a map
 * @param ft test function (v, k, x)
 * @returns \{[k₀, v₀], [k₁, v₁], ...\} | ft(vᵢ) = true; [kᵢ, vᵢ] ∈ x
 */
export function filter<K, V>(x: Map<K, V>, ft: TestFunction<K, V>): Map<K, V> {
  const a = new Map();
  for (const [k, v] of x)
    if (ft(v, k, x)) a.set(k, v);
  return a;
}


/**
 * Keep entries which pass a test.
 * @param x an map (updated)
 * @param ft test function (v, k, x)
 * @returns x = \{[k₀, v₀], [k₁, v₁], ...\} | ft(vᵢ) = true; [kᵢ, vᵢ] ∈ x
 */
export function filter$<K, V>(x: Map<K, V>, ft: TestFunction<K, V>): Map<K, V> {
  for (const [k, v] of x)
    if (!ft(v, k, x)) x.delete(k);
  return x;
}


/**
 * Keep values at given keys.
 * @param x a map
 * @param ks keys
 * @returns \{[k₀, v₀], [k₁, v₁], ...\} | kᵢ ∈ ks; [kᵢ, vᵢ] ∈ x
 */
export function filterAt<K, V>(x: Map<K, V>, ks: K[]): Map<K, V> {
  const a = new Map();
  for (const k of ks)
    a.set(k, x.get(k));
  return a;
}


/**
 * Keep values at given keys.
 * @param x a map (updated)
 * @param ks keys
 * @returns x = \{[k₀, v₀], [k₁, v₁], ...\} | kᵢ ∈ ks; [kᵢ, vᵢ] ∈ x
 */
export function filterAt$<K, V>(x: Map<K, V>, ks: K[]): Map<K, V> {
  for (const k of x.keys())
    if (!ks.includes(k)) x.delete(k);
  return x;
}


/**
 * Discard entries which pass a test.
 * @param x a map
 * @param ft test function (v, k, x)
 * @returns \{[k₀, v₀], [k₁, v₁], ...\} | ft(vᵢ) = false; [kᵢ, vᵢ] ∈ x
 */
export function reject<K, V>(x: Map<K, V>, ft: TestFunction<K, V>): Map<K, V> {
  const a = new Map();
  for (const [k, v] of x)
    if (!ft(v, k, x)) a.set(k, v);
  return a;
}


/**
 * Discard entries which pass a test.
 * @param x a map (updated)
 * @param ft test function (v, k, x)
 * @returns x = \{[k₀, v₀], [k₁, v₁], ...\} | ft(vᵢ) = false; [kᵢ, vᵢ] ∈ x
 */
export function reject$<K, V>(x: Map<K, V>, ft: TestFunction<K, V>): Map<K, V> {
  for (const [k, v] of x)
    if (ft(v, k, x)) x.delete(k);
  return x;
}


/**
 * Discard values at given keys.
 * @param x a map
 * @param ks keys
 * @returns \{[k₀, v₀], [k₁, v₁], ...\} | kᵢ ∉ ks; [kᵢ, vᵢ] ∈ x
 */
export function rejectAt<K, V>(x: Map<K, V>, ks: K[]): Map<K, V> {
  return rejectAt$(new Map(x), ks);
}


/**
 * Discard values at given keys.
 * @param x a map (updated)
 * @param ks keys
 * @returns x = \{[k₀, v₀], [k₁, v₁], ...\} | kᵢ ∉ ks; [kᵢ, vᵢ] ∈ x
 */
export function rejectAt$<K, V>(x: Map<K, V>, ks: K[]): Map<K, V> {
  for (const k of ks)
    x.delete(k);
  return x;
}


/**
 * Flatten nested map to given depth.
 * @param x a nested map
 * @param n maximum depth [-1 ⇒ all]
 * @param fm map function (v, k, x)
 * @param ft test function for flatten (v, k, x) [is]
 * @returns flat map
 */
export function flat<K>(x: Map<K, unknown>, n: number=-1, fm: MapFunction<K, unknown, unknown> | null=null, ft: TestFunction<K, unknown> | null=null): Map<K, unknown> {
  fm = fm || IDENTITY;
  ft = ft || is;
  return flatTo$(new Map(), x, n, fm, ft);
}

function flatTo$<K>(a: Map<K, unknown>, x: Map<K, unknown>, n: number, fm: MapFunction<K, unknown, unknown>, ft: TestFunction<K, unknown>): Map<K, unknown> {
  for (const [k, v] of x) {
    const w = fm(v, k, x);
    if (n!==0 && ft(w, k, x)) flatTo$(a, w as Map<K, unknown>, n-1, fm, ft);
    else a.set(k, w);
  }
  return a;
}


/**
 * Flatten nested map, based on map function.
 * @param x a nested map
 * @param fm map function (v, k, x)
 * @param ft test function for flatten (v, k, x) [is]
 * @returns flat map
 */
export function flatMap<K>(x: Map<K, unknown>, fm: MapFunction<K, unknown, unknown> | null=null, ft: TestFunction<K, unknown> | null=null): Map<K, unknown> {
  fm = fm || IDENTITY;
  ft = ft || is;
  const a  = new Map();
  for (const [k, v] of x) {
    const w = fm(v, k, x);
    if (ft(w, k, x)) concat$(a, w as Map<K, unknown>);
    else a.set(k, w);
  }
  return a;
}


/**
 * Combine matching entries from maps.
 * @param xs maps
 * @param fm map function (vs, k)
 * @param fe end function (dones) [array.some]
 * @param vd default value
 * @returns [fm([x₀[k₀], x₁[k₀], ...]), fm([x₀[k₁], x₁[k₁], ...]), ...]
 */
export function zip<K, V, W=V>(xs: Map<K, V>[], fm: MapFunction<K, V[], V[]|W> | null=null, fe: EndFunction | null=null, vd?: V): Map<K, V[]|W> {
  fm = fm || IDENTITY;
  fe = fe || arraySome as EndFunction;
  const ks = unionKeys(...xs), a = new Map();
  for (const k of ks) {
    const ds = xs.map(x => !x.has(k));
    if (fe(ds)) break;
    const vs = xs.map(x => !x.has(k)? vd : x.get(k));
    a.set(k, fm(vs as V[], k, null));
  }
  return a;
}




// MANIPULATION
// ------------

/**
 * Segregate entries by test result.
 * @param x a map
 * @param ft test function (v, k, x)
 * @returns [satisfies, doesnt]
 */
export function partition<K, V>(x: Map<K, V>, ft: TestFunction<K, V>): [Map<K, V>, Map<K, V>] {
  const t = new Map();
  const f = new Map();
  for (const [k, v] of x) {
    if (ft(v, k, x)) t.set(k, v);
    else f.set(k, v);
  }
  return [t, f];
}


/**
 * Segregate entries by similarity.
 * @param x a map
 * @param fm map function (v, k, x)
 * @returns Map \{key ⇒ values\}
 */
export function partitionAs<K, V, W=V>(x: Map<K, V>, fm: MapFunction<K, V, V|W>): Map<V|W, Map<K, V>> {
  fm = fm || IDENTITY;
  const a  = new Map();
  for (const [k, v] of x) {
    const w = fm(v, k, x);
    if (!a.has(w)) a.set(w, new Map());
    a.get(w).set(k, v);
  }
  return a;
}


/**
 * Break map into chunks of given size.
 * @param x a map
 * @param n chunk size [1]
 * @param s chunk step [n]
 * @returns [x[0..n], x[s..s+n], x[2s..2s+n], ...]
 */
export function chunk<K, V>(x: Map<K, V>, n: number=1, s: number=n): Map<K, V>[] {
  const ks = [...x.keys()], a = [];
  const I  = ks.length;
  for (let i=0; i<I; i+=s)
    a.push(filterAt(x, ks.slice(i, i+n)));
  return a;
}




// COMBINE
// -------

/**
 * Append entries from maps, preferring last.
 * @param xs maps
 * @returns x₀ ∪ x₁ ∪ ... | [x₀, x₁, ...] = xs
 */
export function concat<K, V>(...xs: Entries<K, V>[]): Map<K, V> {
  return concat$(new Map(), ...xs);
}


/**
 * Append entries from maps, preferring last.
 * @param x a map (updated)
 * @param ys other maps
 * @returns x = x ∪ y₀ ∪ y₁ ∪ ... | [y₀, y₁, ...] = ys
 */
export function concat$<K, V>(x: Map<K, V>, ...ys: Entries<K, V>[]): Map<K, V> {
  for (const y of ys) {
    for (const [k, v] of y)
      x.set(k, v);
  }
  return x;
}


/**
 * Join entries together into a string.
 * @param x a map
 * @param sep separator [,]
 * @param asc associator [=]
 * @returns "$\{k₀\}=$\{v₀\},$\{k₁\}=$\{v₁\}..." | [kᵢ, vᵢ] ∈ x
 */
export function join<K, V>(x: Entries<K, V>, sep: string=",", asc: string="="): string {
  let a = "";
  for (const [k, v] of x)
    a += k + asc + v + sep;
  return a.slice(0, -sep.length);
}




// SET OPERATIONS
// --------------

/**
 * Check if maps have no common keys.
 * @param x a map
 * @param y another map
 * @returns x ∩ y = Φ?
 */
export function isDisjoint<K, V>(x: Map<K, V>, y: Entries<K, V>): boolean {
  for (const [k] of y)
    if (x.has(k)) return false;
  return true;
}


/**
 * Obtain keys present in any map.
 * @param xs maps
 * @returns [k₀, k₁, ...] | [kᵢ, vᵢ] ∈ x₀ ∪ x₁, ...; [x₀, x₁, ...] = xs
 */
export function unionKeys<K, V>(...xs: Entries<K, V>[]): Set<K> {
  const a = new Set<K>();
  for (const x of xs) {
    for (const [k] of x)
      a.add(k);
  }
  return a;
}


/**
 * Obtain entries present in any map.
 * @param x a map
 * @param y another map
 * @param fc combine function (a, b)
 * @returns x ∪ y = \{[kᵢ, vᵢ] | [kᵢ, vᵢ] ∈ x or [kᵢ, vᵢ] ∈ y\}
 */
export function union<K, V>(x: Entries<K, V>, y: Entries<K, V>, fc: CombineFunction<V> | null=null): Map<K, V> {
  return union$(new Map(x), y, fc);
}



/**
 * Obtain entries present in any map.
 * @param x a map (updated)
 * @param y another map
 * @param fc combine function (a, b)
 * @returns x = x ∪ y = \{[kᵢ, vᵢ] | [kᵢ, vᵢ] ∈ x or [kᵢ, vᵢ] ∈ y\}
 */
export function union$<K, V>(x: Map<K, V>, y: Entries<K, V>, fc: CombineFunction<V> | null=null): Map<K, V> {
  fc = fc || IDENTITY;
  for (const [k, v] of y) {
    if (!x.has(k)) x.set(k, v);
    else x.set(k, fc(x.get(k) as V, v));
  }
  return x;
}


/**
 * Obtain keys present in all maps.
 * @param xs maps
 * @returns [k₀, k₁, ...] | [kᵢ, vᵢ] ∈ x₀ ∩ x₁, ...; [x₀, x₁, ...] = xs
 */
export function intersectionKeys<K, V>(...xs: Map<K, V>[]): Set<K> {
  const a = new Set<K>();
  if (xs.length===0) return a;
  const x = xs[0], ys = xs.slice(1);
  LOOPX: for (const k of x.keys()) {
    for (const y of ys)
      if (!y.has(k)) continue LOOPX;
    a.add(k);
  }
  return a;
}


/**
 * Obtain entries present in both maps.
 * @param x a map
 * @param y another map
 * @param fc combine function (a, b)
 * @returns x ∩ y = \{[kᵢ, vᵢ] | [kᵢ, vᵢ] ∈ x and [kᵢ, vᵢ] ∈ y\}
 */
export function intersection<K, V>(x: Map<K, V>, y: Entries<K, V>, fc: CombineFunction<V> | null=null): Map<K, V> {
  fc = fc || IDENTITY;
  const a  = new Map();
  for (const [k, v] of y)
    if (x.has(k)) a.set(k, fc(x.get(k) as V, v));
  return a;
}


/**
 * Obtain entries present in both maps.
 * @param x a map (updated)
 * @param y another map
 * @param fc combine function (a, b)
 * @returns x = x ∩ y = \{[kᵢ, vᵢ] | [kᵢ, vᵢ] ∈ x and [kᵢ, vᵢ] ∈ y\}
 */
export function intersection$<K, V>(x: Map<K, V>, y: Map<K, V>, fc: CombineFunction<V> | null=null): Map<K, V> {
  fc = fc || IDENTITY; const ks: K[] = [];
  for (const [k, u] of [...x]) {
    if (!y.has(k)) ks.push(k);
    x.set(k, fc(u, y.get(k) as V));
  }
  return rejectAt$(x, ks);
}


/**
 * Obtain entries not present in another map.
 * @param x a map
 * @param y another map
 * @returns x - y = \{[kᵢ, vᵢ] | [kᵢ, vᵢ] ∈ x, [kᵢ, *] ∉ y\}
 */
export function difference<K, V>(x: Entries<K, V>, y: Entries<K, V>): Map<K, V> {
  return difference$(new Map(x), y);
}


/**
 * Obtain entries not present in another map.
 * @param x a map (updated)
 * @param y another map
 * @returns x = x - y = \{[kᵢ, vᵢ] | [kᵢ, vᵢ] ∈ x, [kᵢ, *] ∉ y\}
 */
export function difference$<K, V>(x: Map<K, V>, y: Entries<K, V>): Map<K, V> {
  for (const [k] of y)
    x.delete(k);
  return x;
}


/**
 * Obtain entries not present in both maps.
 * @param x a map
 * @param y another map
 * @returns x-y ∪ y-x
 */
export function symmetricDifference<K, V>(x: Entries<K, V>, y: Entries<K, V>): Map<K, V> {
  return symmetricDifference$(new Map(x), y);
}


/**
 * Obtain entries not present in both maps.
 * @param x a map (updated)
 * @param y another map
 * @returns x = x-y ∪ y-x
 */
export function symmetricDifference$<K, V>(x: Map<K, V>, y: Entries<K, V>): Map<K, V> {
  for (const [k, v] of y) {
    if (x.has(k)) x.delete(k);
    else x.set(k, v);
  }
  return x;
}


/**
 * List cartesian product of maps.
 * @param xs maps
 * @param fm map function (vs, i)
 * @returns x₀ × x₁ × ... = \{\{[k₀, v₀], [k₁, v₁], ...\} | [k₀, v₀] ∈ x₀, [k₁, v₁] ∈ x₁, ...]\}
 */
export function* cartesianProduct<K, V, W=Map<K, V>>(xs: Map<K, V>[], fm: MapFunction<number, Map<K, V>, Map<K, V>|W> | null=null): IterableIterator<Map<K, V>|W> {
  fm = fm || IDENTITY;
  const XS = xs.length;
  const kx = xs.map(x => [...x.keys()]);
  const ls = kx.map(ks => ks.length);
  const is = kx.map(_ks => 0);
  for (let j=0;; ++j) {
    const a = new Map<K, V>();
    for (let n=0; n<XS; ++n) {
      const i  = is[n], x = xs[n];
      const ks = kx[n], k = ks[i];
      a.set(k, x.get(k) as V);
    }
    yield fm(a, j, null);
    let r = XS-1;
    for (; r>=0; --r) {
      if (++is[r] < ls[r]) break;
      is[r] = 0;
    }
    if (r<0) break;
  }
}
