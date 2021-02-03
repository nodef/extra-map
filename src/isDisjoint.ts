import {Entries} from "./_types";

/**
 * Checks if maps have no common keys.
 * @param x a map
 * @param y another map
 */
function isDisjoint<T, U>(x: Map<T, U>, y: Entries<T, U>): boolean {
  for(var [k] of y)
    if(x.has(k)) return false;
  return true;
}
export default isDisjoint;
