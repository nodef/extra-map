import type {testFn, Entries} from './_types';

/**
 * Finds values passing a test.
 * @param x a map
 * @param fn test function (v, k, x)
 */
function findAll<T, U>(x: Entries<T, U>, fn: testFn<T, U>): U[] {
  var a = [];
  for(var [k, v] of x)
    if(fn(v, k, x)) a.push(v);
  return a;
}
export default findAll;
