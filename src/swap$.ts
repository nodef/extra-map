/**
 * Exchanges two values.
 * @param x a map (updated)
 * @param k a key
 * @param l another key
 * @returns x
 */
function swap$<K, V>(x: Map<K, V>, k: K, l: K): Map<K, V> {
  var t = x.get(k);
  x.set(k, x.get(l));
  x.set(l, t);
  return x;
}
export default swap$;
