/**
 * Sets value at key.
 * @param x a map (updated)
 * @param k key
 * @param v value
 * @returns x
 */
function set$<K, V>(x: Map<K, V>, k: K, v: V): Map<K, V> {
  return x.set(k, v);
}
export default set$;
