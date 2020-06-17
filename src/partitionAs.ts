import id from './_id';
import type {mapFn, Entries} from './_types';

/**
 * Segregates values by similarity.
 * @param x a map
 * @param fm map function (v, k, x)
 */
function partitionAs<T, U, V=U>(x: Entries<T, U>, fm: mapFn<T, U, U|V>): Map<U|V, Map<T, U>> {
  var fm = fm||id;
  var a = new Map();
  for(var [k, v] of x) {
    var v1 = fm(v, k, x);
    if(!a.has(v1)) a.set(v1, new Map());
    a.get(v1).set(k, v);
  }
  return a;
}
export default partitionAs;
