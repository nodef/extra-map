/**
 * Gives keys present in all maps.
 * @param xs maps
 */
function intersectionKeys<T, U>(...xs: Map<T, U>[]): Set<T> {
  var a = new Set<T>();
  if(xs.length===0) return a;
  var x = xs[0], ys = xs.slice(1);
  x: for(var k of x.keys()) {
    for(var y of ys)
      if(!y.has(k)) continue x;
    a.add(k);
  }
  return a;
}
export default intersectionKeys;
