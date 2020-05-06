/**
 * Appends maps to the end.
 * @param x a map (updated)
 * @param ys maps to append
 * @returns x
 */
function concat$<K, V>(x: Map<K, V>, ...ys: Iterable<[K, V]>[]): Map<K, V> {
  for(var y of ys) {
    for(var [k, v] of y)
      x.set(k ,v);
  }
  return x;
}
export default concat$;
