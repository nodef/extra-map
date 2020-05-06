import tomaps from './_tomaps';

/**
 * Gives entries present in all maps.
 * @param x a map (updated)
 * @param ys other maps
 * @returns x
 */
function intersection$<K, V>(x: Map<K, V>, ...ys: Iterable<[K, V]>[]): Map<K, V> {
  var ys1 = tomaps(ys);
  x: for(var [k, _] of x) {
    for(var y of ys1)
      if(!y.has(k)) { x.delete(k); continue x; }
  }
  return x;
}
export default intersection$;
