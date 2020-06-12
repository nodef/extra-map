/**
 * Keeps first n entries only.
 * @param x a map
 * @param n number of entries (1)
 */
function take<T, U>(x: Map<T, U>, n: number=1): Map<T, U> {
  var i = 0, a = new Map();
  for(var [k, v] of x) {
    if(i++>=n) break;
    a.set(k, v);
  }
  return a;
}
export default take;
