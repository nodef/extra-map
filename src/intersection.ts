import id from './_id';
import type {combineFn, Entries} from './_types';

/**
 * Gives entries present in both maps.
 * @param x a map
 * @param y another map
 * @param fn combine function (a, b)
 */
function intersection<T, U>(x: Map<T, U>, y: Entries<T, U>, fn: combineFn<U>=null): Map<T, U> {
  var fn = fn||id;
  var a = new Map();
  for(var [k, v] of y)
    if(!x.has(k)) a.set(k, fn(x.get(k), v));
  return a;
}
export default intersection;
