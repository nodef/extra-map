import id from './_id';
import type {Entries, mapFn} from './_types';

/**
 * Segregates values by similarity.
 * @param x a map
 * @param fn map function (v, k, x)
 * @param ths this argument
 * @returns Map {key => values}
 */
function partitionOn<T, U, V>(x: Entries<T, U>, fn: mapFn<T, U, U|V>=null, ths: object=null): Map<U|V, U[]> {
  var fn = fn||id;
  var a = new Map<V, U[]>();
  for(var [k, v] of x) {
    var v1 = fn.call(ths, v, k, x);
    if(!a.has(v1)) a.set(v1, []);
    a.get(v1).push(v);
  }
  return a;
}
export default partitionOn;
