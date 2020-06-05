/**
 * Sets value at key.
 * @param x a map (updated)
 * @param k key
 * @param v value
 * @returns x
 */
function set$<T, U>(x: Map<T, U>, k: T, v: U): Map<T, U> {
  return x.set(k, v);
}
export default set$;
