import type {testFn, Entries} from './_types';

/**
 * Finds keys of entries passing a test.
 * @param x a map
 * @param fn test function (v, k, x)
 */
function searchAll<T, U>(x: Entries<T, U>, fn: testFn<T, U>): T[] {
  var a = [];
  for(var [k, v] of x)
    if(fn(v, k, x)) a.push(k);
  return a;
}
export default searchAll;
