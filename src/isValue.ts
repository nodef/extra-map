import search from './search';
import type {compareFn} from './_types';

/**
 * Checks if map has a value.
 * @param x a map
 * @param v value?
 * @param fn compare function (a, b)
 */
function isValue<K, V>(x: Iterable<[K, V]>, v: V, fn: compareFn<V>=null): boolean {
  return search(x, v, fn)!==undefined;
}
export default isValue;
