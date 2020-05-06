import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Searches a value.
 * @param x a map
 * @param v search value
 * @param fn compare function (a, b)
 * @returns key of value
 */
function search<K, V>(x: Iterable<[K, V]>, v: V, fn: compareFn<V>=null): K {
  var fn = fn||cmp;
  for(var [k, u] of x)
    if(fn(u, v)===0) return k;
}
export default search;
