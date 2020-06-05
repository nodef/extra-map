import id from './_id';
import type {mapFn} from './_types';

/**
 * Counts occurrences of values.
 * @param x a map
 * @param fn map function (v, k, x)
 * @param ths this argument
 * @returns Map {value => count}
 */
function countOn<T, U, V>(x: Iterable<[T, U]>, fn: mapFn<T, U, V>=null, ths: object=null): Map<V, number> {
  var fn = fn||id;
  var m = new Map();
  for(var [k, v] of x) {
    var v1 = fn.call(ths, v, k, x);
    m.set(v1, (m.get(v1)||0) + 1);
  }
  return m;
}
export default countOn;
