import shift$ from './shift$';

/**
 * Removes first value.
 * @param x a map
 * @returns [[key, value], map]
 */
function shift<K, V>(x: Iterable<[K, V]>): [[K, V], Map<K, V>] {
  var x1 = new Map(x);
  return [shift$(x1), x1];
}
export default shift;
