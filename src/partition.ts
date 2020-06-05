import type {Entries, testFn} from './_types';

/**
 * Segregates values by test result.
 * @param x a map
 * @param fn test function (v, k, x)
 * @param ths this argument
 * @returns [satisfies, doesnt]
 */
function partition<T, U>(x: Entries<T, U>, fn: testFn<T, U>, ths: object=null): [Map<T, U>, Map<T, U>] {
  var t = new Map<T, U>();
  var f = new Map<T, U>();
  for(var [k, v] of x) {
    if(fn.call(ths, v, k, x)) t.set(k, v);
    else f.set(k, v);
  }
  return [t, f];
}
export default partition;
