/**
 * Checks if maps no have key in common.
 * @param xs maps
 */
function isDisjoint<K, V>(...xs: Iterable<[K, V]>[]): boolean {
  var a = new Set<K>();
  for(var x of xs) {
    for(var [k, _] of x) {
      if(a.has(k)) return false;
      a.add(k);
    }
  }
  return true;
}
export default isDisjoint;
