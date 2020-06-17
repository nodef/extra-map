import type {testFn, Entries} from './_types';

/**
 * Finds key of first entry not passing a test.
 * @param x a map
 * @param ft test function (v, k, x)
 */
function scanWhile<T, U>(x: Entries<T, U>, ft: testFn<T, U>): T {
  for(var [k, v] of x)
    if(!ft(v, k, x)) return k;
}
export default scanWhile;
