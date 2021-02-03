import {value as arrayValue} from "extra-array";

/**
 * Picks an arbitrary value.
 * @param x a map
 * @param r random seed 0->1
 */
function value<T, U>(x: Map<T, U>, r: number=Math.random()): U {
  return arrayValue([...x.values()], r);
}
export default value;
