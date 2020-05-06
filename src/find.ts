import type {testFn} from './_types';

/**
 * Finds a value passing the test.
 * @param x a map
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function find<K, V>(x: Iterable<[K, V]>, fn: testFn<K, V>, ths: object=null): V {
  for(var [k, v] of x)
    if(fn.call(ths, v, k, x)) return v;
}
export default find;
