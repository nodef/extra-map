import scanWhile from './scanWhile';
import type {testFn, Entries} from './_types';

/**
 * Checks if all values satisfy a test.
 * @param x a map
 * @param ft test function (v, k, x)
 */
function every<T, U>(x: Entries<T, U>, ft: testFn<T, U>): boolean {
  return scanWhile(x, ft)===undefined;
}
export default every;
