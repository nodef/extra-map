import type {testFn} from './_types';

/**
 * Checks if atleast one value satisfies a test.
 * @param x a map
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function some<K, V>(x: Iterable<[K, V]>, fn: testFn<K, V>, ths: object=null) {
  for(var [k, v] of x)
    if(fn.call(ths, v, k, x)) return true;
  return false;
}
export default some;
