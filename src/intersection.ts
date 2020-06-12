import id from './_id';
import type {combineFn} from './_types';

/**
 * Gives entries present in both maps.
 * @param x a map
 * @param y another map
 * @param fn combine function (a, b)
 */
function intersection<T, U>(x: Map<T, U>, y: Map<T, U>, fn: combineFn<U>=null): Map<T, U> {
  var fn = fn||id;
  var a = new Map();
  for(var [k, u] of x) {
    if(!y.has(k)) continue;
    a.set(k, fn(u, y.get(k)));
  }
  return a;
}
export default intersection;
