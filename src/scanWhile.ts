import type {testFn, Entries} from './_types';

/**
 * Finds key of first entry not passing a test.
 * @param x a map
 * @param fn test function (v, k, x)
 */
function scanWhile<T, U>(x: Entries<T, U>, fn: testFn<T, U>): T {
  for(var [k, v] of x)
    if(!fn(v, k, x)) return k;
}
export default scanWhile;
