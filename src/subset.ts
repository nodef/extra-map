import filterAt from './filterAt';
import {subsequence} from 'extra-array';

/**
 * Picks an arbitrary subset.
 * @param x a map
 * @param n number of entries (-1 => any)
 * @param r random seed 0->1
 */
function subset<T, U>(x: Map<T, U>, n: number=-1, r: number=Math.random()): Map<T, U> {
  var ks = subsequence([...x.keys()], n, r);
  return filterAt(x, ks);
}
export default subset;
