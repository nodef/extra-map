import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Searches a value throughout.
 * @param x a map
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns keys of value
 */
function searchAll<K, V>(x: Iterable<[K, V]>, v: V, fc: compareFn<V>=null): K[] {
  var fc = fc||cmp, a: K[] = [];
  for(var [k, u] of x)
    if(fc(u, v)===0) a.push(k);
  return a;
}
export default searchAll;
