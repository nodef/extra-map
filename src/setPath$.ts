import is from './is';
import getPath from './getPath';
import {last} from 'extra-array';

/**
 * Sets value at path in a nested map.
 * @param x a nested map (updated)
 * @param p path
 * @param v value
 * @returns x
 */
function setPath$<T>(x: Map<T, any>, p: T[], v: any): Map<T, any> {
  var y = getPath(x, p.slice(0, -1));
  if(is(y)) y.set(last(p), v);
  return x;
}
export default setPath$;
