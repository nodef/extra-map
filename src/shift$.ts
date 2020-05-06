/**
 * Removes first value.
 * @param x a map (updated)
 * @returns [key, value]
 */
function shift$<K, V>(x: Map<K, V>): [K, V] {
  for(var [k, v] of x) {
    x.delete(k);
    return [k, v];
  }
}
export default shift$;
