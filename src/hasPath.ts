import is from "./is";

/**
 * Checks if nested map has a path.
 * @param x a nested map
 * @param p path
 */
function hasPath<T>(x: Map<T, any>, p: T[]): boolean {
  for(var k of p) {
    if(!is(x)) return false;
    x = x.get(k);
  }
  return true;
}
export default hasPath;
