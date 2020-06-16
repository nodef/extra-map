/**
 * Gets values at keys.
 * @param x a map
 * @param ks keys
 */
function getAll<T, U>(x: Map<T, U>, ks: T[]): U[] {
  return ks.map(k => x.get(k));
}
export default getAll;
