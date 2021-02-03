import shift$ from "./shift$";
import type {Entries} from "./_types";

/**
 * Removes first entry.
 * @param x a map
 */
function shift<T, U>(x: Entries<T, U>): Map<T, U> {
  return shift$(new Map(x));
}
export default shift;
