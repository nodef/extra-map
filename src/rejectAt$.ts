/**
 * Gets map without given keys.
 * @param x a map (updated)
 * @param ks keys
 * @returns x
 */
function rejectAt$<T, U>(x: Map<T, U>, ks: T[]): Map<T, U> {
  for(var k of ks)
    x.delete(k);
  return x;
}
export default rejectAt$;
