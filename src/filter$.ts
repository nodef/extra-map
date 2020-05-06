import type {testFn} from './_types';

/**
 * Keeps values which pass a test.
 * @param x a map (updated)
 * @param fn test function (v, k, x)
 * @param ths this argument
 * @returns x
 */
function filter$<K, V>(x: Map<K, V>, fn: testFn<K, V>, ths: object=null): Map<K, V> {
  for(var [k, v] of x)
    if(!fn.call(ths, v, k, x)) x.delete(k);
  return x;
}
export default filter$;
