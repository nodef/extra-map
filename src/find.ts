import type {testFn, Entries} from './_types';

/**
 * Finds a value passing a test.
 * @param x a map
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function find<T, U>(x: Entries<T, U>, fn: testFn<T, U>, ths: object=null): U {
  for(var [k, v] of x)
    if(fn.call(ths, v, k, x)) return v;
}
export default find;
