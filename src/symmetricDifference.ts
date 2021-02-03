import symmetricDifference$ from "./symmetricDifference$";
import type {Entries} from "./_types";

/**
 * Gives entries not present in both maps.
 * @param x a map
 * @param y another map
 */
function symmetricDifference<T, U>(x: Entries<T, U>, y: Entries<T, U>): Map<T, U> {
  return symmetricDifference$(new Map(x), y);
}
export default symmetricDifference;
