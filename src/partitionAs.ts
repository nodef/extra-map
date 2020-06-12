import id from './_id';
import type {mapFn, Entries} from './_types';

/**
 * Segregates values by similarity.
 * @param x a map
 * @param fn map function (v, k, x)
 * @param ths this argument
 */
function partitionAs<T, U, V=U>(x: Entries<T, U>, fn: mapFn<T, U, U|V>, ths: object=null): Map<U|V, Map<T, U>> {
  var fn = fn||id;
  var a = new Map();
  for(var [k, v] of x) {
    var v1 = fn.call(ths, v, k, x);
    if(!a.has(v1)) a.set(v1, new Map());
    a.get(v1).set(k, v);
  }
  return a;
}
export default partitionAs;
