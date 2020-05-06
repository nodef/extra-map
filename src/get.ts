/**
 * Gets value at key.
 * @param x a map
 * @param k key
 */
function get<K, V>(x: Map<K, V>, k: K): V {
  return x.get(k);
}
export default get;
