/**
 * Sets value at key.
 * @param x a map
 * @param k key
 * @param v value
 */
function set<K, V>(x: Iterable<[K, V]>, k: K, v: V): Map<K, V> {
  return new Map(x).set(k, v);
}
export default set;
