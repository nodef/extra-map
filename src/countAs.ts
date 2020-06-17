import id from './_id';
import type {mapFn, Entries} from './_types';

/**
 * Counts occurrences of values.
 * @param x a map
 * @param fm map function (v, k, x)
 * @returns Map {value => count}
 */
function countAs<T, U, V=U>(x: Entries<T, U>, fm: mapFn<T, U, U|V>): Map<U|V, number> {
  var fm = fm||id;
  var a = new Map();
  for(var [k, v] of x) {
    var v1 = fm(v, k, x);
    var n = a.get(v1)||0;
    a.set(v1, n+1);
  }
  return a;
}
export default countAs;
