/**
 * Gets size of map.
 * @param x a map
 */
function length<K, V>(x: Map<K, V>): number {
  return x.size;
}
export default length;
