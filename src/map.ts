import type {mapFn} from './_types';

/**
 * Updates values based on map function.
 * @param x a map
 * @param fn map function (v, k, x)
 * @param ths this argument
 */
function map<K, V, W>(x: Iterable<[K, V]>, fn: mapFn<K, V, W>, ths: object=null): Map<K, W> {
  var a = new Map<K, W>();
  for(var [k, v] of x)
    a.set(k, fn.call(ths, v, k, x));
  return a;
}
export default map;
