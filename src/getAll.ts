/**
 * Gets values at keys.
 * @param x a map
 * @param ks keys
 */
function getAll<K, V>(x: Map<K, V>, ks: Iterable<K>): Map<K, V> {
  var a = new Map<K, V>();
  for(var k of ks)
    a.set(k, x.get(k));
  return a;
}
export default getAll;
