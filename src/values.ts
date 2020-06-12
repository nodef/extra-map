/**
 * Lists all values.
 * @param x a map
 */
function* values<T, U>(x: Map<T, U>): IterableIterator<U> {
  yield* x.values();
}
export default values;
