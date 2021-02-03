import drop from "./drop";

/**
 * Gets map without the first entry.
 * @param x a map
 */
function tail<T, U>(x: Map<T, U>): Map<T, U> {
  return drop(x, 1);
}
export default tail;
