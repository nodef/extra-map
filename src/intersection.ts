import intersection$ from './intersection$';

/**
 * Gives entries present in all maps.
 * @param xs maps
 */
function intersection<K, V>(...xs: Iterable<[K, V]>[]): Map<K, V> {
  var x = new Map<K, V>(xs.shift() || []);
  return intersection$(x, ...xs);
}
export default intersection;
