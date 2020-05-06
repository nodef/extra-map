/**
 * Creates a map from entries.
 * @param es entries [[key, value]]
 */
function from<K, V>(es: Iterable<[K, V]>): Map<K, V> {
  return new Map<K, V>(es);
};
export default from;
