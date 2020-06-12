/**
 * Gets size of map.
 * @param x a map
 */
function length<T, U>(x: Map<T, U>): number {
  return x.size;
}
export default length;
