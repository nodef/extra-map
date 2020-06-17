import type {testFn, Entries} from './_types';

/**
 * Finds a value passing a test.
 * @param x a map
 * @param ft test function (v, k, x)
 */
function find<T, U>(x: Entries<T, U>, ft: testFn<T, U>): U {
  for(var [k, v] of x)
    if(ft(v, k, x)) return v;
}
export default find;
