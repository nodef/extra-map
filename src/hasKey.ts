/**
 * Checks if map has a key.
 * @param x a map
 * @param k key?
 */
function hasKey<T, U>(x: Map<T, U>, k: T): boolean {
  return x.has(k);
}
export default hasKey;
