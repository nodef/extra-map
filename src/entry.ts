import {value} from 'extra-array';

/**
 * Picks an arbitrary entry.
 * @param x an object
 * @param r random seed 0->1
 */
function entry<T, U>(x: Map<T, U>, r: number=Math.random()): [T, U] {
  return value([...x], r);
}
export default entry;
