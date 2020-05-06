import swap$ from './swap$';

/**
 * Exchanges two values.
 * @param x a map
 * @param k a key
 * @param l another key
 */
function swap<K, V>(x: Iterable<[K, V]>, k: K, l: K): Map<K, V> {
  return swap$(new Map(x), k, l);
}
export default swap;
