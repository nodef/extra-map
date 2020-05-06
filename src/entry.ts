/**
 * Picks an arbitrary entry.
 * @param x a map
 * @param r random seed 0->1
 */
function entry<K, V>(x: Map<K, V>, r: number=Math.random()): [K, V] {
  var i = Math.floor(r * x.size), j = -1;
  for(var e of x)
    if(++j===i) return e;
}
export default entry;
