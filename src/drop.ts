/**
 * Removes first n entries.
 * @param x a map
 * @param n number of entries (1)
 */
function drop<T, U>(x: Map<T, U>, n: number=1): Map<T, U> {
  var i = 0, a = new Map();
  for(var [k, v] of x)
    if(i++>=n) a.set(k, v);
  return a;
}
export default drop;
