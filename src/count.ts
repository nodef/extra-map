import type {testFn} from './_types';

/**
 * Counts values which satisfy a test.
 * @param x a map
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function count<K, V>(x: Iterable<[K, V]>, fn: testFn<K, V>, ths: object=null): number {
  var n = 0;
  for(var [k, v] of x)
    if(fn.call(ths, v, k, x)) n++;
  return n;
}
export default count;
