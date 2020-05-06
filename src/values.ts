/**
 * Lists all values.
 * @param x a map
 * @returns ...values
 */
function* values<K, V>(x: Iterable<[K, V]>): IterableIterator<V> {
  for(var [, v] of x)
    yield v;
}
export default values;
