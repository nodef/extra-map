/**
 * Gives entries present in any map.
 * @param x a map (updated)
 * @param ys other maps
 * @returns x
 */
function union$<K, V>(x: Map<K, V>, ...ys: Iterable<[K, V]>[]): Map<K, V> {
  for(var y of ys) {
    for(var [k, v] of y)
      if(!x.has(k)) x.set(k, v);
  }
  return x;
}
export default union$;
