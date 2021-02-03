import type {Entries} from "./_types";

/**
 * Creates map from entries.
 * @param es entries
 */
function from<T, U>(es: Entries<T, U>): Map<T, U> {
  return new Map(es);
}
export default from;
