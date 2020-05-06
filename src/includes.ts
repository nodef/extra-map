import isValue from './isValue';

/**
 * Checks if map has a value.
 * @param x a map
 * @param v value?
 */
function includes<K, V>(x: Iterable<[K, V]>, v: V): boolean {
  return isValue(x, v);
}
export default includes;
