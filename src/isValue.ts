import searchValue from './searchValue';
import type {compareFn, mapFn, Entries} from './_types';

/**
 * Checks if map has a value.
 * @param x a map
 * @param v value?
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function isValue<T, U, V=U>(x: Entries<T, U>, v: U, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  return searchValue(x, v, fc, fm)!==undefined;
}
export default isValue;
