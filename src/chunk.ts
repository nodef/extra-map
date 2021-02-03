import filterAt from "./filterAt";

/**
 * Breaks map into chunks of given size.
 * @param x a map
 * @param n chunk size (1)
 * @param s chunk step (n)
 */
function chunk<T, U>(x: Map<T, U>, n: number=1, s: number=n): Map<T, U>[] {
  var ks = [...x.keys()], a = [];
  for(var i=0, I=ks.length; i<I; i+=s)
    a.push(filterAt(x, ks.slice(i, i+n)));
  return a;
}
export default chunk;
