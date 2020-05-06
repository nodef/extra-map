/**
 * Fills with given value.
 * @param x a map (updated)
 * @param v value
 * @returns x
 */
function fill$<K, V>(x: Map<K, V>, v: V): Map<K, V> {
  for(var [k, _] of x)
    x.set(k, v);
  return x;
}
export default fill$;
