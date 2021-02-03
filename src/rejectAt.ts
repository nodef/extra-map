import rejectAt$ from "./rejectAt$";
import type {Entries} from "./_types";

/**
 * Gets map without given keys.
 * @param x a map
 * @param ks keys
 */
function rejectAt<T, U>(x: Entries<T, U>, ks: T[]): Map<T, U> {
  return rejectAt$(new Map(x), ks);
}
export default rejectAt;
