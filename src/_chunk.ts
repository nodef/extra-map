/**
 * Breaks map into chunks of given size.
 * @param x a map
 * @param n chunk size (1)
 * @param s chunk step (n)
 */
function chunk<T, U>(x: Iterable<[K, V]>, n: number=1): Map<K, V>[] {
  var a = [], m = n;
  var b = new Map<K, V>();
  for(var [k, v] of x) {
    b.set(k, v);
    if(--m>0) continue;
    a.push(b);
    b = new Map<K, V>();
    m = n;
  }
  if(b.size) a.push(b);
  return a;
}
export default chunk;
