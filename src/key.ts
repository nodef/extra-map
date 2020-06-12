import {value} from 'extra-array';

/**
 * Picks an arbitrary key.
 * @param x a map
 * @param r random seed 0->1
 */
function key<T, U>(x: Map<T, U>, r: number=Math.random()): T {
  return value([...x.keys()], r);
}
export default key;
