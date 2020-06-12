/**
 * Gives keys present in any map.
 * @param xs maps
 */
function unionKeys<T, U>(...xs: Map<T, U>[]): Set<T> {
  var a = new Set<T>();
  for(var x of xs) {
    for(var k of x.keys())
      a.add(k);
  }
  return a;
}
export default unionKeys;
