import type {testFn, Entries} from './_types';

/**
 * Finds keys of entries passing a test.
 * @param x a map
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function searchAll<T, U>(x: Map<T, U>, fn: testFn<T, U>, ths: object=null): T[] {
  var a = [];
  for(var [k, v] of x)
    if(fn.call(ths, v, k, x)) a.push(k);
  return a;
}
export default searchAll;
