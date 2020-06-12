import compare from './compare';
import type {compareFn, mapFn} from './_types';

/**
 * Checks if two maps are equal.
 * @param x a map
 * @param y another map
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function isEqual<T, U, V=U>(x: Map<T, U>, y: Map<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  return x.size===y.size && compare(x, y, fc, fm)===0;
}
export default isEqual;
