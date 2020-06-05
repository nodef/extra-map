/**
 * Gets value at key.
 * @param x a map
 * @param k key
 */
function get<T, U>(x: Map<T, U>, k: T): U {
  return x.get(k);
}
export default get;
