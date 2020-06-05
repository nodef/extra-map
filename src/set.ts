import type {Entries} from './_types';

/**
 * Sets value at key.
 * @param x a map
 * @param k key
 * @param v value
 */
function set<T, U>(x: Entries<T, U>, k: T, v: U): Map<T, U> {
  return new Map(x).set(k, v);
}
export default set;
