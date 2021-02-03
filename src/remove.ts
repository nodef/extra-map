import remove$ from "./remove$";
import type {Entries} from "./_types";

/**
 * Deletes an entry.
 * @param x a map
 * @param k key
 */
function remove<T, U>(x: Entries<T, U>, k: T): Map<T, U> {
  return remove$(new Map(x), k);
}
export default remove;
