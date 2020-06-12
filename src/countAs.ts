import id from './_id';
import type {mapFn, Entries} from './_types';

/**
 * Counts occurrences of values.
 * @param x a map
 * @param fn map function (v, k, x)
 * @param ths this argument
 * @returns Map {value => count}
 */
function countAs<T, U, V=U>(x: Entries<T, U>, fn: mapFn<T, U, U|V>, ths: object=null): Map<U|V, number> {
  var fn = fn||id;
  var a = new Map();
  for(var [k, v] of x) {
    var v1 = fn.call(ths, v, k, x);
    var n = a.get(v1)||0;
    a.set(v1, n+1);
  }
  return a;
}
export default countAs;
