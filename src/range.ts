import iterableRange from '@extra-iterable/range';
import type {compareFn} from './_types';

/**
 * Finds smallest and largest entries.
 * @param x a map
 * @param fn compare function (a, b)
 * @returns [min, max]
 */
function range<K, V>(x: Iterable<[K, V]>, fn: compareFn<[K, V]>=null): [[K, V], [K, V]] {
  return iterableRange(x, fn);
}
export default range;
