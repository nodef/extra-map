import is from './is';
import type {Entries} from './_types';

function flatTo<T>(x: Entries<T, any>, dep: number, a: Map<T, any>): Map<T, any> {
  for(var [k, v] of x) {
    if(dep!==0 && is(v)) flatTo(v, dep-1, a);
    else a.set(k, v);
  }
  return a;
}

/**
 * Flattens nested map to given depth.
 * @param x a nested map
 * @param dep maximum depth (-1)
 */
function flat<T>(x: Entries<T, any>, dep: number=-1): Map<T, any> {
  return flatTo(x, dep, new Map());
}
export default flat;
