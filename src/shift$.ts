/**
 * Removes first value.
 * @param x a map (updated)
 * @returns x
 */
function shift$<T, U>(x: Map<T, U>): Map<T, U> {
  for(var [k] of x)
    x.delete(k);
  return x;
}
export default shift$;
