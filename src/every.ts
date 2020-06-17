import scanWhile from './scanWhile';
import type {testFn, Entries} from './_types';

/**
 * Checks if all values satisfy a test.
 * @param x a map
 * @param fn test function (v, k, x)
 */
function every<T, U>(x: Entries<T, U>, fn: testFn<T, U>): boolean {
  return scanWhile(x, fn)===undefined;
}
export default every;
