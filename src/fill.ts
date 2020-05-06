/**
 * Fills with given value.
 * @param x an array
 * @param v value
 * @param i start index (0)
 * @param I end index (end)
 */
function fill<K, V>(x: Iterable<[K, V]>, v: V): Map<K, V> {
  var a = new Map<K, V>();
  for(var [k, _] of x)
    a.set(k, v);
  return a;
}
export default fill;
