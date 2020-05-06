import type {testFn} from './_types';

/**
 * Finds key of a value passing the test.
 * @param x a map
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function findKey<K, V>(x: Iterable<[K, V]>, fn: testFn<K, V>, ths: object=null): K {
  for(var [k, v] of x)
    if(fn.call(ths, v, k, x)) return k;
}
export default findKey;
