import scanUntil from './scanUntil';
import type {testFn, Entries} from './_types';

/**
 * Checks if any value satisfies a test.
 * @param x a map
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function some<T, U>(x: Entries<T, U>, fn: testFn<T, U>, ths: object=null): boolean {
  return scanUntil(x, fn, ths)!==undefined;
}
export default some;
