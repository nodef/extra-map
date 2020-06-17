import search from './search';
import type {testFn, Entries} from './_types';

/**
 * Finds key of first entry passing a test.
 * @param x a map
 * @param fn test function (v, k, x)
 */
function scanUntil<T, U>(x: Entries<T, U>, fn: testFn<T, U>): T {
  return search(x, fn);
}
export default scanUntil;
