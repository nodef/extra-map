/**
 * Gets values at keys.
 * @param x a map
 * @param ks keys
 */
function getAll<T, U>(x: Map<T, U>, ks: Iterable<T>): Map<T, U> {
  var a = new Map<T, U>();
  for(var k of ks)
    a.set(k, x.get(k));
  return a;
}
export default getAll;
