import difference$ from './difference$';

/**
 * Gives entries of a map not present in others.
 * @param x a map
 * @param ys other maps
 */
function difference<K, V>(x: Iterable<[K, V]>, ...ys: Iterable<[K, V]>[]): Map<K, V> {
  return difference$(new Map<K, V>(x), ...ys);
}
export default difference;
