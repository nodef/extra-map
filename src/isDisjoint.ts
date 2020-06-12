/**
 * Checks if maps have no common keys.
 * @param x a map
 * @param y another map
 */
function isDisjoint<T, U>(x: Map<T, U>, y: Map<T, U>): boolean {
  for(var k of x.keys())
    if(y.has(k)) return false;
  return true;
}
export default isDisjoint;
