import is from './is';
import type {mapFn} from './_types';

function flatMapTo<K>(x: Iterable<[K, any]>, fn: mapFn<K, any, any>, ths: object, a: Map<K, any>): Map<K, any> {
  for(var [k, u] of x) {
    var v = fn(u, k, x);
    if(is(v)) flatMapTo(v, fn, ths, a);
    else a.set(k, v);
  }
  return a;
}

/**
 * Flattens nested map, using map function.
 * @param x a nested map
 * @param fn map function (v, k, x)
 * @param ths this argument
 */
function flatMap<K, V, W>(x: Iterable<[K, any]>, fn: mapFn<K, V, W>, ths: object=null): Map<K, W> {
  return flatMapTo(x, fn, ths, new Map<K, any>());
}
export default flatMap;
