/**
 * Compares two values.
 * @param a a value
 * @param b another value
 * @returns a<b: -ve, a=b: 0, a>b: +ve
 */
 function cmp<T>(a: T, b: T): number {
  return a<b? -1:(a>b? 1:0);
}
export default cmp;


/**
 * Gives same value.
 * @param v a value
 * @returns v
 */
 function id<T>(v: T): T {
  return v;
}
export default id;




// TYPES
// =====

export type arrayMapFn<T, U>  = (v: T, i: number, x: Iterable<T>) => U;
export type tillFn            = (dones: boolean[]) => boolean;
export type compareFn<T>      = (a: T, b: T) => number;
export type calledFn<T, U>    = (v: U, k: T, x: Entries<T, U>) => void;
export type testFn<T, U>      = (v: U, k: T, x: Entries<T, U>) => boolean;
export type mapFn<T, U, V>    = (v: U, k: T, x: Entries<T, U>) => V;
export type reduceFn<T, U, V> = (acc: V, v: U, k: T, x: Entries<T, U>) => V;
export type getFn<T>          = () => T;
export type combineFn<T>      = (a: T, b: T) => T;
export type Entries<T, U>     = Iterable<[T, U]>;
export type Lists<T, U>       = [Iterable<T>, Iterable<U>];




// METHODS
// =======

// ABOUT
// -----

/**
 * Checks if value is map.
 * @param v value
 */
 function is(v: any): v is Map<any, any> {
  return v instanceof Map;
}
export default is;


/**
 * Lists all keys.
 * @param x a map
 */
 function* keys<T, U>(x: Map<T, U>): IterableIterator<T> {
  yield* x.keys();
}
export default keys;


/**
 * Lists all values.
 * @param x a map
 */
 function* values<T, U>(x: Map<T, U>): IterableIterator<U> {
  yield* x.values();
}
export default values;


import type {Entries} from "./_types";

/**
 * Lists all key-value pairs.
 * @param x a map
 */
function* entries<T, U>(x: Entries<T, U>): IterableIterator<[T, U]> {
  yield* x;
}
export default entries;




// GENERATE
// --------

import type {Entries} from "./_types";

/**
 * Creates map from entries.
 * @param es entries
 */
function from<T, U>(es: Entries<T, U>): Map<T, U> {
  return new Map(es);
}
export default from;


import type {Entries} from "./_types";

/**
 * Creates map from entries.
 * @param es entries (updatable if map)
 */
function from$<T, U>(es: Entries<T, U>): Map<T, U> {
  return es instanceof Map? es : new Map(es);
}
export default from$;


import type {Lists} from "./_types";

/**
 * Creates map from lists.
 * @param ls lists, i.e. [keys, values]
 */
function fromLists<T, U>(ls: Lists<T, U>): Map<T, U> {
  var [ks, vs] = ls, vi = vs[Symbol.iterator]();
  var a = new Map();
  for(var k of ks)
    a.set(k, vi.next().value);
  return a;
}
export default fromLists;


import id from "./_id";
import {from$} from "extra-array";
import type {arrayMapFn} from "./_types";

function fromValuesArray<T, U=T>(vs: T[], fm: arrayMapFn<T, T|U>) {
  var a = new Map(), ks = vs.map(fm);
  for(var i=0, I=vs.length; i<I; i++)
    a.set(ks[i], vs[i]);
  return a;
}

/**
 * Creates a map from values.
 * @param vs values
 * @param fm map function (v, i, x)
 */
function fromValues<T, U=T>(vs: Iterable<T>, fm: arrayMapFn<T, T|U>=null) {
  return fromValuesArray(from$(vs), fm||id);
}
export default fromValues;




// COMPARE
// -------

import id from "./_id";
import cmp from "./_cmp";
import unionKeys from "./unionKeys";
import type {compareFn, mapFn} from "./_types";

/**
 * Compares two maps.
 * @param x a map
 * @param y another map
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns x=y: 0, otherwise: -ve/+ve
 */
function compare<T, U, V=U>(x: Map<T, U>, y: Map<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): number {
  var fc = fc||cmp, fm = fm||id;
  var ks = unionKeys(x, y);
  for(var k of ks) {
    if(!x.has(k)) return -1;
    if(!y.has(k)) return 1;
    var u = fm(x.get(k), k, x);
    var v = fm(y.get(k), k, y);
    var c = fc(u, v);
    if(c!==0) return c;
  }
  return 0;
}
export default compare;


import compare from "./compare";
import type {compareFn, mapFn} from "./_types";

/**
 * Checks if two maps are equal.
 * @param x a map
 * @param y another map
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function isEqual<T, U, V=U>(x: Map<T, U>, y: Map<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  return x.size===y.size && compare(x, y, fc, fm)===0;
}
export default isEqual;




// SIZE
// ----

/**
 * Gets size of map.
 * @param x a map
 */
 function size<T, U>(x: Map<T, U>): number {
  return x.size;
}
export default size;


/**
 * Checks if map is empty.
 * @param x a map
 */
 function isEmpty<T, U>(x: Map<T, U>): boolean {
  return x.size===0;
}
export default isEmpty;




// GET/SET
// -------

/**
 * Gets value at key.
 * @param x a map
 * @param k key
 */
 function get<T, U>(x: Map<T, U>, k: T): U {
  return x.get(k);
}
export default get;


/**
 * Gets values at keys.
 * @param x a map
 * @param ks keys
 */
 function getAll<T, U>(x: Map<T, U>, ks: T[]): U[] {
  return ks.map(k => x.get(k));
}
export default getAll;


import is from "./is";

/**
 * Gets value at path in a nested map.
 * @param x a nested map
 * @param p path
 */
function getPath<T>(x: Map<T, any>, p: T[]): any {
  for(var k of p)
    x = is(x)? x.get(k) : undefined;
  return x;
}
export default getPath;


import is from "./is";

/**
 * Checks if nested map has a path.
 * @param x a nested map
 * @param p path
 */
function hasPath<T>(x: Map<T, any>, p: T[]): boolean {
  for(var k of p) {
    if(!is(x)) return false;
    x = x.get(k);
  }
  return true;
}
export default hasPath;


import type {Entries} from "./_types";

/**
 * Sets value at key.
 * @param x a map
 * @param k key
 * @param v value
 */
function set<T, U>(x: Entries<T, U>, k: T, v: U): Map<T, U> {
  return new Map(x).set(k, v);
}
export default set;


/**
 * Sets value at key.
 * @param x a map (updated)
 * @param k key
 * @param v value
 * @returns x
 */
 function set$<T, U>(x: Map<T, U>, k: T, v: U): Map<T, U> {
  return x.set(k, v);
}
export default set$;


import is from "./is";
import getPath from "./getPath";
import {last} from "extra-array";

/**
 * Sets value at path in a nested map.
 * @param x a nested map (updated)
 * @param p path
 * @param v value
 * @returns x
 */
function setPath$<T>(x: Map<T, any>, p: T[], v: any): Map<T, any> {
  var y = getPath(x, p.slice(0, -1));
  if(is(y)) y.set(last(p), v);
  return x;
}
export default setPath$;


import swap$ from "./swap$";
import type {Entries} from "./_types";

/**
 * Exchanges two values.
 * @param x a map
 * @param k a key
 * @param l another key
 */
function swap<T, U>(x: Entries<T, U>, k: T, l: T): Map<T, U> {
  return swap$(new Map(x), k, l);
}
export default swap;


/**
 * Exchanges two values.
 * @param x a map (updated)
 * @param k a key
 * @param l another key
 * @returns x
 */
 function swap$<T, U>(x: Map<T, U>, k: T, l: T): Map<T, U> {
  var t = x.get(k);
  x.set(k, x.get(l));
  x.set(l, t);
  return x;
}
export default swap$;


import remove$ from "./remove$";
import type {Entries} from "./_types";

/**
 * Deletes an entry.
 * @param x a map
 * @param k key
 */
function remove<T, U>(x: Entries<T, U>, k: T): Map<T, U> {
  return remove$(new Map(x), k);
}
export default remove;


/**
 * Deletes an entry.
 * @param x a map (updated)
 * @param k key
 * @returns x
 */
 function remove$<T, U>(x: Map<T, U>, k: T): Map<T, U> {
  x.delete(k);
  return x;
}
export default remove$;


import is from "./is";
import getPath from "./getPath";
import {last} from "extra-array";

/**
 * Deletes value at path in a nested map.
 * @param x a nested map (updated)
 * @param p path
 * @returns x
 */
function removePath$<T>(x: Map<T, any>, p: T[]): Map<T, any> {
  var y = getPath(x, p.slice(0, -1));
  if(is(y)) y.delete(last(p));
  return x;
}
export default removePath$;




// PROPERTY
// --------

import type {testFn, Entries} from "./_types";

/**
 * Counts values which satisfy a test.
 * @param x a map
 * @param fn test function (v, k, x)
 */
function count<T, U>(x: Entries<T, U>, fn: testFn<T, U>): number {
  var a = 0;
  for(var [k, v] of x)
    if(fn(v, k, x)) a++;
  return a;
}
export default count;


import id from "./_id";
import type {mapFn, Entries} from "./_types";

/**
 * Counts occurrences of values.
 * @param x a map
 * @param fm map function (v, k, x)
 * @returns Map {value => count}
 */
function countAs<T, U, V=U>(x: Entries<T, U>, fm: mapFn<T, U, U|V>): Map<U|V, number> {
  var fm = fm||id;
  var a = new Map();
  for(var [k, v] of x) {
    var v1 = fm(v, k, x);
    var n = a.get(v1)||0;
    a.set(v1, n+1);
  }
  return a;
}
export default countAs;


import range from "./range";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Finds smallest entry.
 * @param x a map
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [key, value]
 */
function min<T, U, V=U>(x: Entries<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): [T, U] {
  return range(x, fc, fm)[0];
}
export default min;


import range from "./range";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Finds largest entry.
 * @param x a map
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [key, value]
 */
function max<T, U, V=U>(x: Entries<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): [T, U] {
  return range(x, fc, fm)[1];
}
export default max;


import id from "./_id";
import cmp from "./_cmp";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Finds smallest and largest entries.
 * @param x a map
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [smallest, largest]
 */
function range<T, U, V=U>(x: Entries<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): [[T, U], [T, U]] {
  var fc = fc||cmp, fm = fm||id;
  var mk: T, mu: U, mv: U|V;
  var nk: T, nu: U, nv: U|V;
  var i = 0;
  for(var [k, u] of x) {
    var v = fm(u, k, x);
    if(i===0 || fc(v, mv)<0) { mk = k; mu = u; mv = v; }
    if(i===0 || fc(v, nv)>0) { nk = k; nu = u; nv = v; }
    i++;
  }
  return [[mk, mu], [nk, nu]];
}
export default range;




// PART
// ----

import {head as iterableHead} from "extra-iterable";
import type {Entries} from "./_types";

/**
 * Gets first entry.
 * @param x a map
 * @param ed default entry
 */
function head<T, U>(x: Entries<T, U>, ed: [T, U]=[] as any): [T, U] {
  return iterableHead(x, ed);
}
export default head;


import drop from "./drop";

/**
 * Gets map without the first entry.
 * @param x a map
 */
function tail<T, U>(x: Map<T, U>): Map<T, U> {
  return drop(x, 1);
}
export default tail;


/**
 * Keeps first n entries only.
 * @param x a map
 * @param n number of entries (1)
 */
 function take<T, U>(x: Map<T, U>, n: number=1): Map<T, U> {
  var i = 0, a = new Map();
  for(var [k, v] of x) {
    if(i++>=n) break;
    a.set(k, v);
  }
  return a;
}
export default take;


/**
 * Keeps first n entries only.
 * @param x a map (updated)
 * @param n number of entries (1)
 * @returns x
 */
 function take$<T, U>(x: Map<T, U>, n: number=1): Map<T, U> {
  var i = 0;
  for(var k of x.keys())
    if(i++>=n) x.delete(k);
  return x;
}
export default take$;


/**
 * Removes first n entries.
 * @param x a map
 * @param n number of entries (1)
 */
 function drop<T, U>(x: Map<T, U>, n: number=1): Map<T, U> {
  var i = 0, a = new Map();
  for(var [k, v] of x)
    if(i++>=n) a.set(k, v);
  return a;
}
export default drop;


/**
 * Removes first n entries.
 * @param x a map (updated)
 * @param n number of entries (1)
 * @returns x
 */
 function drop$<T, U>(x: Map<T, U>, n: number=1): Map<T, U> {
  var i = 0;
  for(var k of x.keys()) {
    if(i++>=n) break;
    x.delete(k);
  }
  return x;
}
export default drop$;




// ARRANGEMENTS
// ------------

import filterAt from "./filterAt";
import {subsequences} from "extra-array";

/**
 * Lists all possible subsets.
 * @param x a map
 * @param n number of entries (-1 => any)
 */
function* subsets<T, U>(x: Map<T, U>, n: number=-1): IterableIterator<Map<T, U>> {
  for(var ks of subsequences([...x.keys()], n))
    yield filterAt(x, ks);
}
export default subsets;


import {value as arrayValue} from "extra-array";

/**
 * Picks an arbitrary value.
 * @param x a map
 * @param r random seed 0->1
 */
function value<T, U>(x: Map<T, U>, r: number=Math.random()): U {
  return arrayValue([...x.values()], r);
}
export default value;


import {value} from "extra-array";

/**
 * Picks an arbitrary key.
 * @param x a map
 * @param r random seed 0->1
 */
function key<T, U>(x: Map<T, U>, r: number=Math.random()): T {
  return value([...x.keys()], r);
}
export default key;


import {value} from "extra-array";
import type {Entries} from "./_types";

/**
 * Picks an arbitrary entry.
 * @param x a map
 * @param r random seed 0->1
 */
function entry<T, U>(x: Entries<T, U>, r: number=Math.random()): [T, U] {
  return value([...x], r);
}
export default entry;


import filterAt from "./filterAt";
import {subsequence} from "extra-array";

/**
 * Picks an arbitrary subset.
 * @param x a map
 * @param n number of entries (-1 => any)
 * @param r random seed 0->1
 */
function subset<T, U>(x: Map<T, U>, n: number=-1, r: number=Math.random()): Map<T, U> {
  var ks = subsequence([...x.keys()], n, r);
  return filterAt(x, ks);
}
export default subset;




// FIND
// ----

/**
 * Checks if map has a key.
 * @param x a map
 * @param k key?
 */
 function has<T, U>(x: Map<T, U>, k: T): boolean {
  return x.has(k);
}
export default has;


import searchValue from "./searchValue";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Checks if map has a value.
 * @param x a map
 * @param v value?
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function hasValue<T, U, V=U>(x: Entries<T, U>, v: U, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  return searchValue(x, v, fc, fm)!==undefined;
}
export default hasValue;


import id from "./_id";
import cmp from "./_cmp";
import type {compareFn, mapFn} from "./_types";

/**
 * Checks if map has an entry.
 * @param x a map
 * @param e entry?
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function hasEntry<T, U, V=U>(x: Map<T, U>, e: [T, U], fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  var fc = fc||cmp, fm = fm||id, [k, v] = e;
  return x.has(k) && fc(fm(x.get(k), k, x), v)===0;
}
export default hasEntry;


import id from "./_id";
import cmp from "./_cmp";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Checks if map has a subset.
 * @param x a map
 * @param y subset?
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function hasSubset<T, U, V=U>(x: Map<T, U>, y: Entries<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  var fc = fc||cmp, fm = fm||id;
  for(var [k, v] of y) {
    if(!x.has(k)) return false;
    var u1 = fm(x.get(k), k, x);
    var v1 = fm(v, k, y);
    if(fc(u1, v1)!==0) return false;
  }
  return true;
}
export default hasSubset;


import type {testFn, Entries} from "./_types";

/**
 * Finds a value passing a test.
 * @param x a map
 * @param ft test function (v, k, x)
 */
function find<T, U>(x: Entries<T, U>, ft: testFn<T, U>): U {
  for(var [k, v] of x)
    if(ft(v, k, x)) return v;
}
export default find;


import type {testFn, Entries} from "./_types";

/**
 * Finds values passing a test.
 * @param x a map
 * @param ft test function (v, k, x)
 */
function findAll<T, U>(x: Entries<T, U>, ft: testFn<T, U>): U[] {
  var a = [];
  for(var [k, v] of x)
    if(ft(v, k, x)) a.push(v);
  return a;
}
export default findAll;


import type {testFn, Entries} from "./_types";

/**
 * Finds key of an entry passing a test.
 * @param x a map
 * @param ft test function (v, k, x)
 */
function search<T, U>(x: Entries<T, U>, ft: testFn<T, U>): T {
  for(var [k, v] of x)
    if(ft(v, k, x)) return k;
}
export default search;


import type {testFn, Entries} from "./_types";

/**
 * Finds keys of entries passing a test.
 * @param x a map
 * @param ft test function (v, k, x)
 */
function searchAll<T, U>(x: Entries<T, U>, ft: testFn<T, U>): T[] {
  var a = [];
  for(var [k, v] of x)
    if(ft(v, k, x)) a.push(k);
  return a;
}
export default searchAll;


import id from "./_id";
import cmp from "./_cmp";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Finds key with given value.
 * @param x a map
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function searchValue<T, U, V=U>(x: Entries<T, U>, v: U, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): T {
  var fc = fc||cmp, fm = fm||id;
  var v1 = fm(v, null, null);
  for(var [k, u] of x) {
    var u1 = fm(u, k, x);
    if(fc(u1, v1)===0) return k;
  }
}
export default searchValue;


import id from "./_id";
import cmp from "./_cmp";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Finds keys with given value.
 * @param x a map
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function searchValueAll<T, U, V=U>(x: Entries<T, U>, v: U, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): T[] {
  var fc = fc||cmp, fm = fm||id;
  var v1 = fm(v, null, x), a = [];
  for(var [k, u] of x) {
    var u1 = fm(u, k, x);
    if(fc(u1, v1)===0) a.push(k);
  }
  return a;
}
export default searchValueAll;


import type {testFn, Entries} from "./_types";

/**
 * Finds key of first entry not passing a test.
 * @param x a map
 * @param ft test function (v, k, x)
 */
function scanWhile<T, U>(x: Entries<T, U>, ft: testFn<T, U>): T {
  for(var [k, v] of x)
    if(!ft(v, k, x)) return k;
}
export default scanWhile;


import search from "./search";
import type {testFn, Entries} from "./_types";

/**
 * Finds key of first entry passing a test.
 * @param x a map
 * @param ft test function (v, k, x)
 */
function scanUntil<T, U>(x: Entries<T, U>, ft: testFn<T, U>): T {
  return search(x, ft);
}
export default scanUntil;




// FUNCTIONAL
// ----------

import type {calledFn} from "./_types";

/**
 * Calls a function for each value.
 * @param x a map
 * @param fc called function (v, k, x)
 */
function forEach<T, U>(x: Iterable<[T, U]>, fc: calledFn<T, U>): void {
  for(var [k, v] of x)
    fc(v, k, x);
}
export default forEach;


import scanUntil from "./scanUntil";
import type {testFn, Entries} from "./_types";

/**
 * Checks if any value satisfies a test.
 * @param x a map
 * @param ft test function (v, k, x)
 */
function some<T, U>(x: Entries<T, U>, ft: testFn<T, U>): boolean {
  return scanUntil(x, ft)!==undefined;
}
export default some;


import scanWhile from "./scanWhile";
import type {testFn, Entries} from "./_types";

/**
 * Checks if all values satisfy a test.
 * @param x a map
 * @param ft test function (v, k, x)
 */
function every<T, U>(x: Entries<T, U>, ft: testFn<T, U>): boolean {
  return scanWhile(x, ft)===undefined;
}
export default every;


import type {Entries, mapFn} from "./_types";

/**
 * Updates values based on map function.
 * @param x a map
 * @param fm map function (v, k, x)
 */
function map<T, U, V=U>(x: Entries<T, U>, fm: mapFn<T, U, U|V>): Map<T, U|V> {
  var a = new Map();
  for(var [k, v] of x)
    a.set(k, fm(v, k, x));
  return a;
}
export default map;


import type {mapFn} from "./_types";

/**
 * Updates values based on map function.
 * @param x a map (updated)
 * @param fm map function (v, k, x)
 * @returns x
 */
function map$<T, U>(x: Map<T, U>, fm: mapFn<T, U, U>): Map<T, U> {
  for(var [k, v] of x)
    x.set(k, fm(v, k, x));
  return x;
}
export default map$;


import type {reduceFn, Entries} from "./_types";

/**
 * Reduces values to a single value.
 * @param x a map
 * @param fr reduce function (acc, v, k, x)
 * @param acc initial value
 */
function reduce<T, U, V=U>(x: Entries<T, U>, fr: reduceFn<T, U, U|V>, acc?: U|V): U|V {
  var init = arguments.length <= 2;
  for(var [k, v] of x) {
    if(init) { acc = v; init = false; }
    else acc = fr(acc, v, k, x);
  }
  return acc;
}
export default reduce;


import type {testFn, Entries} from "./_types";

/**
 * Keeps entries which pass a test.
 * @param x a map
 * @param ft test function (v, k, x)
 */
function filter<T, U>(x: Entries<T, U>, ft: testFn<T, U>): Map<T, U> {
  var a = new Map();
  for(var [k, v] of x)
    if(ft(v, k, x)) a.set(k, v);
  return a;
}
export default filter;


import type {testFn} from "./_types";

/**
 * Keeps entries which pass a test.
 * @param x an map (updated)
 * @param ft test function (v, k, x)
 * @returns x
 */
function filter$<T, U>(x: Map<T, U>, ft: testFn<T, U>): Map<T, U> {
  for(var [k, v] of x)
    if(!ft(v, k, x)) x.delete(k);
  return x;
}
export default filter$;


/**
 * Gets map with given keys.
 * @param x a map
 * @param ks keys
 */
 function filterAt<T, U>(x: Map<T, U>, ks: T[]): Map<T, U> {
  var a = new Map();
  for(var k of ks)
    a.set(k, x.get(k));
  return a;
}
export default filterAt;


/**
 * Gets map with given keys.
 * @param x a map (updated)
 * @param ks keys
 * @returns x
 */
 function filterAt$<T, U>(x: Map<T, U>, ks: T[]): Map<T, U> {
  for(var k of x.keys())
    if(!ks.includes(k)) x.delete(k);
  return x;
}
export default filterAt$;


import type {testFn, Entries} from "./_types";

/**
 * Discards entries which pass a test.
 * @param x a map
 * @param ft test function (v, k, x)
 */
function reject<T, U>(x: Entries<T, U>, ft: testFn<T, U>): Map<T, U> {
  var a = new Map();
  for(var [k, v] of x)
    if(!ft(v, k, x)) a.set(k, v);
  return a;
}
export default reject;


import type {testFn} from "./_types";

/**
 * Discards entries which pass a test.
 * @param x a map (updated)
 * @param ft test function (v, k, x)
 * @returns x
 */
function reject$<T, U>(x: Map<T, U>, ft: testFn<T, U>): Map<T, U> {
  for(var [k, v] of x)
    if(ft(v, k, x)) x.delete(k);
  return x;
}
export default reject$;


import rejectAt$ from "./rejectAt$";
import type {Entries} from "./_types";

/**
 * Gets map without given keys.
 * @param x a map
 * @param ks keys
 */
function rejectAt<T, U>(x: Entries<T, U>, ks: T[]): Map<T, U> {
  return rejectAt$(new Map(x), ks);
}
export default rejectAt;


/**
 * Gets map without given keys.
 * @param x a map (updated)
 * @param ks keys
 * @returns x
 */
 function rejectAt$<T, U>(x: Map<T, U>, ks: T[]): Map<T, U> {
  for(var k of ks)
    x.delete(k);
  return x;
}
export default rejectAt$;


import id from "./_id";
import is from "./is";
import type {mapFn, testFn, Entries} from "./_types";

function flatTo<T>(x: Entries<T, any>, n: number, fm: mapFn<T, any, any>, ft: testFn<T, any>, a: Map<T, any>): Map<T, any> {
  for(var [k, v] of x) {
    var v1 = fm(v, k, x);
    if(n!==0 && ft(v1, k, x)) flatTo(v1, n-1, fm, ft, a);
    else a.set(k, v1);
  }
  return a;
}

/**
 * Flattens nested map to given depth.
 * @param x a nested map
 * @param n maximum depth (-1 => all)
 * @param fm map function (v, k, x)
 * @param ft test function (v, k, x)
 */
function flat<T>(x: Entries<T, any>, n: number=-1, fm: mapFn<T, any, any>=null, ft: testFn<T, any>=null): Map<T, any> {
  var fm = fm||id, ft = ft||is;
  return flatTo(x, n, fm, ft, new Map());
}
export default flat;


import id from "./_id";
import is from "./is";
import concat$ from "./concat$";
import type {mapFn, testFn, Entries} from "./_types";

/**
 * Flattens nested map, using map function.
 * @param x a nested map
 * @param fm map function (v, k, x)
 * @param ft test function (v, k, x)
 */
function flatMap<T>(x: Entries<T, any>, fm: mapFn<T, any, any>=null, ft: testFn<T, any>=null): Map<T, any> {
  var fm = fm||id, ft = ft||is;
  var a = new Map();
  for(var [k, v] of x) {
    var v1 = fm(v, k, x);
    if(ft(v1, k, x)) concat$(a, v1);
    else a.set(k, v1);
  }
  return a;
}
export default flatMap;


import id from "./_id";
import unionKeys from "./unionKeys";
import {some} from "extra-iterable";
import type {mapFn, tillFn} from "./_types";

/**
 * Combines matching entries from maps.
 * @param xs maps
 * @param fm map function (vs, k)
 * @param ft till function (dones) (some)
 * @param vd default value
 */
function zip<T, U, V=U>(xs: Map<T, U>[], fm: mapFn<T, U[], U[]|V>=null, ft: tillFn=null, vd?: U): Map<T, U[]|V> {
  var fm = fm||id, ft = ft||some as tillFn;
  var ks = unionKeys(...xs), a = new Map();
  for(var k of ks) {
    var ds = xs.map(x => !x.has(k));
    if(ft(ds)) break;
    var vs = xs.map(x => !x.has(k)? vd : x.get(k));
    a.set(k, fm(vs, k, null));
  }
  return a;
}
export default zip;




// MANIPULATION
// ------------

import shift$ from "./shift$";
import type {Entries} from "./_types";

/**
 * Removes first entry.
 * @param x a map
 */
function shift<T, U>(x: Entries<T, U>): Map<T, U> {
  return shift$(new Map(x));
}
export default shift;


import drop$ from "./drop$";

/**
 * Removes first entry.
 * @param x a map (updated)
 * @returns x
 */
function shift$<T, U>(x: Map<T, U>): Map<T, U> {
  return drop$(x, 1);
}
export default shift$;


import type {testFn, Entries} from "./_types";

/**
 * Segregates values by test result.
 * @param x a map
 * @param ft test function (v, k, x)
 * @returns [satisfies, doesnt]
 */
function partition<T, U>(x: Entries<T, U>, ft: testFn<T, U>): [Map<T, U>, Map<T, U>] {
  var t = new Map();
  var f = new Map();
  for(var [k, v] of x) {
    if(ft(v, k, x)) t.set(k, v);
    else f.set(k, v);
  }
  return [t, f];
}
export default partition;


import id from "./_id";
import type {mapFn, Entries} from "./_types";

/**
 * Segregates values by similarity.
 * @param x a map
 * @param fm map function (v, k, x)
 */
function partitionAs<T, U, V=U>(x: Entries<T, U>, fm: mapFn<T, U, U|V>): Map<U|V, Map<T, U>> {
  var fm = fm||id;
  var a = new Map();
  for(var [k, v] of x) {
    var v1 = fm(v, k, x);
    if(!a.has(v1)) a.set(v1, new Map());
    a.get(v1).set(k, v);
  }
  return a;
}
export default partitionAs;


import filterAt from "./filterAt";

/**
 * Breaks map into chunks of given size.
 * @param x a map
 * @param n chunk size (1)
 * @param s chunk step (n)
 */
function chunk<T, U>(x: Map<T, U>, n: number=1, s: number=n): Map<T, U>[] {
  var ks = [...x.keys()], a = [];
  for(var i=0, I=ks.length; i<I; i+=s)
    a.push(filterAt(x, ks.slice(i, i+n)));
  return a;
}
export default chunk;




// COMBINE
// -------

import concat$ from "./concat$";
import type {Entries} from "./_types";

/**
 * Appends entries from maps, preferring last.
 * @param xs maps
 */
function concat<T, U>(...xs: Entries<T, U>[]): Map<T, U> {
  return concat$(new Map(), ...xs);
}
export default concat;


import type {Entries} from "./_types";

/**
 * Appends entries from maps, preferring last.
 * @param x a maps (updated)
 * @param ys other maps
 * @returns x
 */
function concat$<T, U>(x: Map<T, U>, ...ys: Entries<T, U>[]): Map<T, U> {
  for(var y of ys) {
    for(var [k, v] of y)
      x.set(k, v);
  }
  return x;
}
export default concat$;


import type {Entries} from "./_types";

/**
 * Joins entries together.
 * @param x a map
 * @param sep separator (,)
 * @param asc associator (=)
 */
function join<T, U>(x: Entries<T, U>, sep: string=",", asc: string="="): string {
  var a = "";
  for(var [k, v] of x)
    a += k+asc+v+sep;
  return a.slice(0, -sep.length);
}
export default join;




// SET OPERATIONS
// --------------

import {Entries} from "./_types";

/**
 * Checks if maps have no common keys.
 * @param x a map
 * @param y another map
 */
function isDisjoint<T, U>(x: Map<T, U>, y: Entries<T, U>): boolean {
  for(var [k] of y)
    if(x.has(k)) return false;
  return true;
}
export default isDisjoint;


import type {Entries} from "./_types";

/**
 * Gives keys present in any map.
 * @param xs maps
 */
function unionKeys<T, U>(...xs: Entries<T, U>[]): Set<T> {
  var a = new Set<T>();
  for(var x of xs) {
    for(var [k] of x)
      a.add(k);
  }
  return a;
}
export default unionKeys;


import union$ from "./union$";
import type {combineFn, Entries} from "./_types";

/**
 * Gives entries present in any map.
 * @param x a map
 * @param y another map
 * @param fc combine function (a, b)
 */
function union<T, U>(x: Entries<T, U>, y: Entries<T, U>, fc: combineFn<U>=null): Map<T, U> {
  return union$(new Map(x), y, fc);
}
export default union;


import id from "./_id";
import type {combineFn, Entries} from "./_types";

/**
 * Gives entries present in any map.
 * @param x a map (updated)
 * @param y another map
 * @param fc combine function (a, b)
 * @returns x
 */
function union$<T, U>(x: Map<T, U>, y: Entries<T, U>, fc: combineFn<U>=null): Map<T, U> {
  var fc = fc||id;
  for(var [k, v] of y) {
    if(!x.has(k)) x.set(k, v);
    else x.set(k, fc(x.get(k), v));
  }
  return x;
}
export default union$;


/**
 * Gives keys present in all maps.
 * @param xs maps
 */
 function intersectionKeys<T, U>(...xs: Map<T, U>[]): Set<T> {
  var a = new Set<T>();
  if(xs.length===0) return a;
  var x = xs[0], ys = xs.slice(1);
  x: for(var k of x.keys()) {
    for(var y of ys)
      if(!y.has(k)) continue x;
    a.add(k);
  }
  return a;
}
export default intersectionKeys;


import id from "./_id";
import type {combineFn, Entries} from "./_types";

/**
 * Gives entries present in both maps.
 * @param x a map
 * @param y another map
 * @param fc combine function (a, b)
 */
function intersection<T, U>(x: Map<T, U>, y: Entries<T, U>, fc: combineFn<U>=null): Map<T, U> {
  var fc = fc||id;
  var a = new Map();
  for(var [k, v] of y)
    if(x.has(k)) a.set(k, fc(x.get(k), v));
  return a;
}
export default intersection;


import id from "./_id";
import rejectAt$ from "./rejectAt$";
import type {combineFn} from "./_types";

/**
 * Gives entries present in both maps.
 * @param x a map (updated)
 * @param y another map
 * @param fc combine function (a, b)
 * @returns x
 */
function intersection$<T, U>(x: Map<T, U>, y: Map<T, U>, fc: combineFn<U>=null): Map<T, U> {
  var fc = fc||id, ks = [];
  for(var [k, u] of [...x]) {
    if(!y.has(k)) ks.push(k);
    x.set(k, fc(u, y.get(k)));
  }
  return rejectAt$(x, ks);
}
export default intersection$;


import difference$ from "./difference$";
import type {Entries} from "./_types";

/**
 * Gives entries of map not present in another.
 * @param x a map
 * @param y another map
 */
function difference<T, U>(x: Entries<T, U>, y: Entries<T, U>): Map<T, U> {
  return difference$(new Map(x), y);
}
export default difference;


import type {Entries} from "./_types";

/**
 * Gives entries of map not present in another.
 * @param x a map (updated)
 * @param y another map
 * @returns x
 */
function difference$<T, U>(x: Map<T, U>, y: Entries<T, U>): Map<T, U> {
  for(var [k] of y)
    x.delete(k);
  return x;
}
export default difference$;


import symmetricDifference$ from "./symmetricDifference$";
import type {Entries} from "./_types";

/**
 * Gives entries not present in both maps.
 * @param x a map
 * @param y another map
 */
function symmetricDifference<T, U>(x: Entries<T, U>, y: Entries<T, U>): Map<T, U> {
  return symmetricDifference$(new Map(x), y);
}
export default symmetricDifference;


import type {Entries} from "./_types";

/**
 * Gives entries not present in both maps.
 * @param x a map (updated)
 * @param y another map
 * @returns x
 */
function symmetricDifference$<T, U>(x: Map<T, U>, y: Entries<T, U>): Map<T, U> {
  for(var [k, v] of y) {
    if(x.has(k)) x.delete(k);
    else x.set(k, v);
  }
  return x;
}
export default symmetricDifference$;


import id from "./_id";
import type {mapFn} from "./_types";

/**
 * Lists cartesian product of maps.
 * @param xs maps
 * @param fm map function (vs, i)
 */
function* cartesianProduct<T, U, V=Map<T, U>>(xs: Map<T, U>[], fm: mapFn<number, Map<T, U>, Map<T, U>|V>=null): IterableIterator<Map<T, U>|V> {
  var fm = fm||id;
  var XS  = xs.length;
  var kss = xs.map(x => [...x.keys()]);
  var ls = kss.map(ks => ks.length);
  var is = kss.map(ks => 0);
  for(var j=0;; j++) {
    var a = new Map<T, U>();
    for(var n=0; n<XS; n++) {
      var i  = is[n],  x = xs[n];
      var ks = kss[n], k = ks[i];
      a.set(k, x.get(k));
    }
    yield fm(a, j, null);
    for(var r=XS-1; r>=0; r--) {
      is[r]++;
      if(is[r]<ls[r]) break;
      is[r] = 0;
    }
    if(r<0) break;
  }
}
export default cartesianProduct;
