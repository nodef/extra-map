/**
 * Gets map with given keys.
 * @param x a map
 * @param ks keys
 */
function filterAt<T, U>(x: Map<T, U>, ks: T[]): Map<T, U> {
  var a = new Map();
  for(var k of ks)
    a.set(k, x.get(k));
  return a;
}
export default filterAt;
