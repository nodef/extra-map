import type {testFn, Entries} from './_types';

/**
 * Counts values which satisfy a test.
 * @param x a map
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function count<T, U>(x: Entries<T, U>, fn: testFn<T, U>, ths: object=null): number {
  var a = 0;
  for(var [k, v] of x)
    if(fn.call(ths, v, k, x)) a++;
  return a;
}
export default count;
