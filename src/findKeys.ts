import type {testFn} from './_types';

/**
 * Finds keys of values passing the test.
 * @param x a map
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function findKeys<K, V>(x: Iterable<[K, V]>, fn: testFn<K, V>, ths: object=null): K[] {
  var a: K[] = [];
  for(var [k, v] of x)
    if(fn.call(ths, v, k, x)) a.push(k);
  return a;
}
export default findKeys;
