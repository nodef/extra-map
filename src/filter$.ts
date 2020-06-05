import type {testFn} from './_types';

/**
 * Keeps values which pass a test.
 * @param x a map (updated)
 * @param fn test function (v, k, x)
 * @param ths this argument
 * @returns x
 */
function filter$<T, U>(x: Map<T, U>, fn: testFn<T, U>, ths: object=null): Map<T, U> {
  for(var [k, v] of x)
    if(!fn.call(ths, v, k, x)) x.delete(k);
  return x;
}
export default filter$;
