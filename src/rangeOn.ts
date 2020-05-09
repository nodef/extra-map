import iterableRangeOn from '@extra-iterable/range-on';
import type {mapFn} from './_types';
import id from './_id';

/**
 * Finds smallest and largest entries.
 * @param x a map
 * @param fn map function (v, k, x)
 * @param ths this argument
 * @returns [min, max]
 */
function rangeOn<K, V, W>(x: Iterable<[K, V]>, fn: mapFn<K, V, W>=null, ths: object=null): [[K, V], [K, V]] {
  var fn = fn || id;
  return iterableRangeOn(x, ([k, v]) => fn.call(ths, v, k, x));
}
export default rangeOn;
