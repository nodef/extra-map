import concat$ from './concat$';

/**
 * Appends maps together.
 * @param xs maps to append
 */
function concat<K, V>(...xs: Iterable<[K, V]>[]): Map<K, V> {
  return concat$(new Map<K, V>(), ...xs);
}
export default concat;
