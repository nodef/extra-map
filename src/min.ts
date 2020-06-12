import range from './range';
import type {compareFn, mapFn, Entries} from './_types';

/**
 * Finds smallest entry.
 * @param x a map
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function min<T, U, V=U>(x: Entries<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): [T, U] {
  return range(x, fc, fm)[0];
}
export default min;
