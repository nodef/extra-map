/**
 * Keeps first n entries only.
 * @param x a map (updated)
 * @param n number of entries (1)
 * @returns x
 */
function take$<T, U>(x: Map<T, U>, n: number=1): Map<T, U> {
  var i = 0;
  for(var k of x.keys())
    if(i++>=n) x.delete(k);
  return x;
}
export default take$;
