import is from './is';
import getPath from './getPath';
import {last} from 'extra-array';

/**
 * Deletes value at path in a nested map.
 * @param x a nested map (updated)
 * @param p path
 * @returns x
 */
function removePath$<T>(x: Map<T, any>, p: T[]): Map<T, any> {
  var y = getPath(x, p.slice(0, -1));
  if(is(y)) y.delete(last(p));
  return x;
}
export default removePath$;
