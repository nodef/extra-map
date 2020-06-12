import union$ from './union$';
import type {combineFn, Entries} from './_types';

/**
 * Gives entries present in any map.
 * @param x a map
 * @param y another map
 * @param fn combine function (a, b)
 */
function union<T, U>(x: Entries<T, U>, y: Map<T, U>, fn: combineFn<U>=null): Map<T, U> {
  return union$(new Map(x), y, fn);
}
export default union;
