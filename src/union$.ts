import id from './_id';
import type {combineFn} from './_types';

/**
 * Gives entries present in any map.
 * @param x a map (updated)
 * @param y another map
 * @param fn combine function (a, b)
 * @returns x
 */
function union$<T, U>(x: Map<T, U>, y: Map<T, U>, fn: combineFn<U>=null): Map<T, U> {
  var fn = fn||id;
  for(var [k, v] of y) {
    if(!x.has(k)) x.set(k, v);
    else x.set(k, fn(x.get(k), v));
  }
  return x;
}
export default union$;
