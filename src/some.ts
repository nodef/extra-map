import scanUntil from './scanUntil';
import type {testFn, Entries} from './_types';

/**
 * Checks if any value satisfies a test.
 * @param x a map
 * @param ft test function (v, k, x)
 */
function some<T, U>(x: Entries<T, U>, ft: testFn<T, U>): boolean {
  return scanUntil(x, ft)!==undefined;
}
export default some;
