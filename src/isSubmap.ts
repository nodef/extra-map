import tomaps from './_tomaps';

/**
 * Checks if map is part of all maps.
 * @param x a map
 * @param y other maps
 */
function isSubmap<K, V>(x: Map<K, V>, ...ys: Iterable<[K, V]>[]): boolean {
  var ys1 = tomaps(ys);
  for(var y of ys1) {
    for(var [k, v] of x)
      if(y.get(k)!==v) return false;
  }
  return true;
}
export default isSubmap;
