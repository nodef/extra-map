import iterableMinOn from '@extra-iterable/min-on';
import type {mapFn} from './_types';

/**
 * Finds smallest entry.
 * @param x a map
 * @param fn map function (v, k, x)
 * @param ths this argument
 */
function minOn<K, V, W>(x: Iterable<[K, V]>, fn: mapFn<K, V, W>=null, ths: object=null): [K, V] {
  return iterableMinOn(x, ([k, v]) => fn.call(ths, v, k, x));
}
export default minOn;
