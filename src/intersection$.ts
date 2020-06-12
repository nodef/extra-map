import id from './_id';
import rejectAt$ from './rejectAt$';
import type {combineFn} from './_types';

/**
 * Gives entries present in both maps.
 * @param x a map (updated)
 * @param y another map
 * @param fn combine function (a, b)
 * @returns x
 */
function intersection$<T, U>(x: Map<T, U>, y: Map<T, U>, fn: combineFn<U>=null): Map<T, U> {
  var fn = fn||id, ks = [];
  for(var [k, u] of [...x]) {
    if(!y.has(k)) ks.push(k);
    x.set(k, fn(u, y.get(k)));
  }
  return rejectAt$(x, ks);
}
export default intersection$;
