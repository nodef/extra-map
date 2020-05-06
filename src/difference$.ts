/**
 * Gives entries of a map not present in others.
 * @param x a map (updated)
 * @param ys other maps
 */
function difference$<K, V>(x: Map<K, V>, ...ys: Iterable<[K, V]>[]): Map<K, V> {
  for(var y of ys) {
    for(var [k, _] of y)
      x.delete(k);
  }
  return x;
}
export default difference$;
