/**
 * Lists all keys.
 * @param x a map
 * @returns ...keys
 */
function* keys<K, V>(x: Iterable<[K, V]>): IterableIterator<K> {
  for(var [k, ] of x)
    yield k;
}
export default keys;
