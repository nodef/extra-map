import iterableMax from '@extra-iterable/max';
import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Finds largest entry.
 * @param x a map
 * @param fn compare function (a, b)
 */
function max<K, V>(x: Iterable<[K, V]>, fn: compareFn<[K, V]>=null): [K, V] {
  var fn = fn || cmp;
  // @ts-ignore
  return iterableMax(x, (a, b) => fn(a[1], b[1]));
}
export default max;
