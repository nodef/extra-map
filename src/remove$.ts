/**
 * Deletes an entry.
 * @param x a map (updated)
 * @param k key
 * @returns x
 */
function remove$<T, U>(x: Map<T, U>, k: T): Map<T, U> {
  x.delete(k);
  return x;
}
export default remove$;
