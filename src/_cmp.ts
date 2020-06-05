/**
 * Compares two values.
 * @param a a value
 * @param b another value
 * @returns a<b: -ve, a=b: 0, a>b: +ve
 */
function cmp<T>(a: T, b: T): number {
  return a<b? -1:(a>b? 1:0);
}
export default cmp;
