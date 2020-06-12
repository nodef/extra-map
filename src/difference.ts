/**
 * Gives entries of map not present in another.
 * @param x a map
 * @param y another map
 */
function difference<T, U>(x: Map<T, U>, y: Map<T, U>): Map<T, U> {
  var a = new Map();
  for(var [k, v] of x)
    if(!y.has(k)) a.set(k, v);
  return a;
}
export default difference;
