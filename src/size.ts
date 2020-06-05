/**
 * Counts the number of values.
 * @param x a map
 */
function size<T, U>(x: Map<T, U>): number {
  return x.size;
}
export default size;
