import iterableRange from '@extra-iterable/range';
import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Finds smallest and largest entries.
 * @param x a map
 * @param fn compare function (a, b)
 * @returns [min, max]
 */
function range<K, V>(x: Iterable<[K, V]>, fn: compareFn<[K, V]>=null): [[K, V], [K, V]] {
  var fn = fn || cmp;
  // @ts-ignore
  return iterableRange(x, (a, b) => fn(a[1], b[1]));
}
export default range;
