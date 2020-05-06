import iterableMaxOn from '@extra-iterable/max-on';
import type {mapFn} from './_types';

/**
 * Finds largest entry.
 * @param x a map
 * @param fn map function (v, k, x)
 * @param ths this argument
 */
function maxOn<K, V, W>(x: Iterable<[K, V]>, fn: mapFn<K, V, W>=null, ths: object=null): [K, V] {
  return iterableMaxOn(x, ([k, v]) => fn.call(ths, v, k, x));
}
export default maxOn;
