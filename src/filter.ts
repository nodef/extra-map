import type {testFn} from './_types';

/**
 * Keeps values which pass a test.
 * @param x a map
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function filter<K, V>(x: Iterable<[K, V]>, fn: testFn<K, V>, ths: object=null): Map<K, V> {
  var a = new Map<K, V>();
  for(var [k, v] of x)
    if(fn.call(ths, v, k, x)) a.set(k, v);
  return a;
}
export default filter;
// do you want to implement filterTo here?
// i.e., a as input argument
