/**
 * Lists all key-value pairs.
 * @param x a map
 */
function* entries<K, V>(x: Iterable<[K, V]>): IterableIterator<[K, V]> {
  for(var e of x)
    yield e;
}
export default entries;
