import union$ from './union$';

/**
 * Gives entries present in any map.
 * @param xs maps
 */
function union<K, V>(...xs: Iterable<[K, V]>[]): Map<K, V> {
  return union$(new Map<K, V>(), ...xs);
}
export default union;
