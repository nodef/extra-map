import drop$ from './drop$';

/**
 * Removes first entry.
 * @param x a map (updated)
 * @returns x
 */
function shift$<T, U>(x: Map<T, U>): Map<T, U> {
  return drop$(x, 1);
}
export default shift$;
