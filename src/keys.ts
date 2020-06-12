/**
 * Lists all keys.
 * @param x a map
 */
function* keys<T, U>(x: Map<T, U>): IterableIterator<T> {
  yield* x.keys();
}
export default keys;
