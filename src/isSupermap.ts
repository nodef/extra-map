import tomaps from './_tomaps';

/**
 * Checks if all maps are part of a map.
 * @param x a map
 * @param y other maps
 */
function isSupermap<K, V>(x: Map<K, V>, ...ys: Iterable<[K, V]>[]): boolean {
  var ys1 = tomaps(ys);
  for(var y of ys1) {
    for(var [k, v] of y)
      if(x.get(k)!==v) return false;
  }
  return true;
}
export default isSupermap;
