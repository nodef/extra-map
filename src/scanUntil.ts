import search from './search';
import type {testFn, Entries} from './_types';

/**
 * Finds key of first entry passing a test.
 * @param x a map
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function scanUntil<T, U>(x: Entries<T, U>, fn: testFn<T, U>, ths: object=null): T {
  return search(x, fn, ths);
}
export default scanUntil;
