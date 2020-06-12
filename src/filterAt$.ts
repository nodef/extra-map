/**
 * Gets map with given keys.
 * @param x a map (updated)
 * @param ks keys
 * @returns x
 */
function filterAt$<T, U>(x: Map<T, U>, ks: T[]): Map<T, U> {
  for(var k of x.keys())
    if(!ks.includes(k)) x.delete(k);
  return x;
}
export default filterAt$;
