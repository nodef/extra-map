import id from './_id';
import type {Entries, mapFn} from './_types';

/**
 * Counts occurrences of values.
 * @param x a map
 * @param fn map function (v, k, x)
 * @param ths this argument
 * @returns Map {value => count}
 */
function countOn<T, U, V>(x: Entries<T, U>, fn: mapFn<T, U, U|V>=null, ths: object=null): Map<U|V, number> {
  var fn = fn||id;
  var a = new Map();
  for(var [k, v] of x) {
    var v1 = fn.call(ths, v, k, x);
    a.set(v1, (a.get(v1)||0) + 1);
  }
  return a;
}
export default countOn;
