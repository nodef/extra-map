/**
 * Fills with given value.
 * @param x a map (updated)
 * @param v value
 * @returns x
 */
function fill$<T, U>(x: Map<T, U>, v: U): Map<T, U> {
  for(var [k] of x)
    x.set(k, v);
  return x;
}
export default fill$;
