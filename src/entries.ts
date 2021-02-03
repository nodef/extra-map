import type {Entries} from "./_types";

/**
 * Lists all key-value pairs.
 * @param x a map
 */
function* entries<T, U>(x: Entries<T, U>): IterableIterator<[T, U]> {
  yield* x;
}
export default entries;
