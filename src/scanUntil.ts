import search from "./search";
import type {testFn, Entries} from "./_types";

/**
 * Finds key of first entry passing a test.
 * @param x a map
 * @param ft test function (v, k, x)
 */
function scanUntil<T, U>(x: Entries<T, U>, ft: testFn<T, U>): T {
  return search(x, ft);
}
export default scanUntil;
