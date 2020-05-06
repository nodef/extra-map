import id from './_id';
import type {mapFn} from './_types';

/**
 * Checks if map has a value.
 * @param x a map
 * @param v value?
 * @param fn map function (v, k, x)
 * @param ths this argument
 */
function isValueOn<K, V, W>(x: Iterable<[K, V]>, v: V, fn: mapFn<K, V, W>=null, ths: object=null): boolean {
  var fn = fn||id;
  var v1 = fn.call(ths, v, null, null);
  for(var [k, u] of x) {
    var u1 = fn.call(ths, u, k, x);
    if(u1===v1) return true;
  }
  return false;
}
export default isValueOn;
