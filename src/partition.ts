import type {testFn} from './_types';

/**
 * Segregates map keeping similar values together.
 * @param x a map
 * @param fn test function (v, k, x)
 * @param ths this argument
 * @returns [satisfies, doesnt]
 */
function partition<K, V>(x: Iterable<[K, V]>, fn: testFn<K, V>, ths: object=null): [Map<K, V>, Map<K, V>] {
  var t = new Map<K, V>();
  var f = new Map<K, V>();
  for(var [k, v] of x) {
    if(fn.call(ths, v, k, x)) t.set(k, v);
    else f.set(k, v);
  }
  return [t, f];
}
export default partition;
