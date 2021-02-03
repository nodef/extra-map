import {value} from "extra-array";
import type {Entries} from "./_types";

/**
 * Picks an arbitrary entry.
 * @param x a map
 * @param r random seed 0->1
 */
function entry<T, U>(x: Entries<T, U>, r: number=Math.random()): [T, U] {
  return value([...x], r);
}
export default entry;
