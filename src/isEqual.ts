import compare from './compare';
import type {compareFn} from './_types';

/**
 * Checks if two maps are equal.
 * @param x a map
 * @param y another map
 * @param fn compare function (a, b)
 */
function isEqual<K, V>(x: Map<K, V>, y: Map<K, V>, fn: compareFn<V>=null): boolean {
  return compare(x, y, fn)===0;
}
export default isEqual;
