import iterableMin from '@extra-iterable/min';
import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Finds smallest entry.
 * @param x a map
 * @param fn compare function (a, b)
 */
function min<K, V>(x: Iterable<[K, V]>, fn: compareFn<[K, V]>=null): [K, V] {
  var fn = fn || cmp;
  // @ts-ignore
  return iterableMin(x, (a, b) => fn(a[1], b[1]));
}
export default min;
