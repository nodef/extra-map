/**
 * Exchanges two values.
 * @param x a map (updated)
 * @param k a key
 * @param l another key
 * @returns x
 */
function swap$<T, U>(x: Map<T, U>, k: T, l: T): Map<T, U> {
  var t = x.get(k);
  x.set(k, x.get(l));
  x.set(l, t);
  return x;
}
export default swap$;
