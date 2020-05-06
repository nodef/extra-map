import type {testFn} from './_types';

/**
 * Checks if all values satisfy a test.
 * @param x a map
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function every<K, V>(x: Iterable<[K, V]>, fn: testFn<K, V>, ths: object=null) {
  for(var [k, v] of x)
    if(!fn.call(ths, v, k, x)) return false;
  return true;
}
export default every;
