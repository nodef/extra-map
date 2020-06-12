/**
 * Checks if map is empty.
 * @param x a map
 */
function isEmpty<T, U>(x: Map<T, U>): boolean {
  return x.size===0;
}
export default isEmpty;
