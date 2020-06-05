import id from './_id';
import type {mapFn} from './_types';

/**
 * Segregates map keeping similar values together.
 * @param x an array
 * @param fn map function (v, k, x)
 * @param ths this argument
 * @returns Map {key => values}
 */
function partitionOn<K, V, W>(x: Iterable<[K, V]>, fn: mapFn<K, V, W>=null, ths: object=null): Map<W, V[]> {
  var fn = fn||id;
  var a = new Map<W, V[]>();
  for(var [k, v] of x) {
    var v1 = fn.call(ths, v, k, x);
    if(!a.has(v1)) a.set(v1, []);
    a.get(v1).push(v);
  }
  return a;
}
export default partitionOn;
