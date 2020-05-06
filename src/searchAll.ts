import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Searches a value throughout.
 * @param x a map
 * @param v search value
 * @param fn compare function (a, b)
 * @returns keys of value
 */
function searchAll<K, V>(x: Iterable<[K, V]>, v: V, fn: compareFn<V>=null): K[] {
  var fn = fn||cmp, a: K[] = [];
  for(var [k, u] of x)
    if(fn(u, v)===0) a.push(k);
  return a;
}
export default searchAll;
