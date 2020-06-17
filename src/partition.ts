import type {testFn, Entries} from './_types';

/**
 * Segregates values by test result.
 * @param x a map
 * @param fn test function (v, k, x)
 * @returns [satisfies, doesnt]
 */
function partition<T, U>(x: Entries<T, U>, fn: testFn<T, U>): [Map<T, U>, Map<T, U>] {
  var t = new Map();
  var f = new Map();
  for(var [k, v] of x) {
    if(fn(v, k, x)) t.set(k, v);
    else f.set(k, v);
  }
  return [t, f];
}
export default partition;
